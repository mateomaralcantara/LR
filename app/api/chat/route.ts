import {NextRequest,NextResponse} from 'next/server';
import {agents} from '@/lib/data';
export const runtime='nodejs';
const maxMessages=20;
export async function POST(req:NextRequest){
  try{
    const contentLength=Number(req.headers.get('content-length')||0);
    if(contentLength>25000)return NextResponse.json({error:'Solicitud demasiado grande.'},{status:413});
    const body=await req.json();
    const messages=body?.messages;
    const agent=typeof body?.agent==='string'?body.agent:'Nexo';
    if(!Array.isArray(messages)||messages.length<1||messages.length>maxMessages||!messages.every((m:unknown)=>typeof m==='object'&&m!==null&&'role'in m&&'content'in m&&(['user','assistant'].includes(String(m.role)))&&typeof m.content==='string'&&m.content.length<=3000))return NextResponse.json({error:'Formato de mensajes inválido.'},{status:400});
    if(!agents.some(a=>a[0]===agent)&&agent!=='Nexo')return NextResponse.json({error:'Agente desconocido.'},{status:400});
    const apiKey=process.env.OPENAI_API_KEY;
    if(!apiKey)return NextResponse.json({mode:'demo',reply:'ChatLR está en modo demostración. Para obtener respuestas reales, configura OPENAI_API_KEY en .env.local y reinicia el servidor. Tu pregunta puede analizarse considerando el problema, las evidencias, las alternativas y su impacto social.'});
    const model=process.env.OPENAI_MODEL||'gpt-4.1-mini';
    const controller=new AbortController();const timeout=setTimeout(()=>controller.abort(),25000);
    try{
      const upstream=await fetch('https://api.openai.com/v1/chat/completions',{
        method:'POST',signal:controller.signal,
        headers:{'Content-Type':'application/json','Authorization':`Bearer ${apiKey}`},
        body:JSON.stringify({model,temperature:0.6,max_tokens:650,messages:[{role:'system',content:`Eres ${agent}, asistente educativo de la plataforma conceptual Liderazgo Responsable. Responde en español con precisión, imparcialidad política, respeto y transparencia. Distingue hechos de opiniones. No afirmes estar vinculado oficialmente a José Laluz ni a una organización. Si no sabes un dato actual, dilo. No inventes fuentes.`},...messages]})
      });
      if(!upstream.ok)return NextResponse.json({error:'No se pudo obtener una respuesta del proveedor de IA.'},{status:502});
      const result=await upstream.json();
      const reply=result?.choices?.[0]?.message?.content;
      if(typeof reply!=='string'||!reply.trim())return NextResponse.json({error:'Respuesta vacía del proveedor.'},{status:502});
      return NextResponse.json({mode:'live',reply});
    }finally{clearTimeout(timeout)}
  }catch(e){return NextResponse.json({error:e instanceof Error&&e.name==='AbortError'?'La solicitud tardó demasiado.':'No se pudo procesar la solicitud.'},{status:500})}
}

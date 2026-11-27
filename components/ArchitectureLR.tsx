import styles from './ArchitectureLR.module.css';

const diagrams = [
 { file: 'arquitectura-general.jpg', title: 'Arquitectura general de la plataforma', text: 'Cinco capas: experiencia de usuario, lógica de aplicación, orquestación, Harness y motor de IA. Incluye componentes actuales y futuros.' },
 { file: 'motor-ia.jpg', title: 'Motor de Inteligencia Artificial', text: 'LLM Adaptado, APIs y modelos configurables. El adaptador multiproveedor, los perfiles de modelos por tarea y los registros centrales son objetivos de evolución.' },
 { file: 'familias-agenticas.jpg', title: 'Familias agénticas y Harnesses', text: 'ChatLR, Biblioteca, Radar Social y Participación LR. Actualmente existen dos flujos multiagente: Biblioteca y Radar. ChatLR usa un tutor por consulta; el Harness de Participación es propuesto.' },
 { file: 'flujo-informacion.jpg', title: 'Flujo de información y ciclo de respuesta', text: 'Desde la consulta hasta el resultado. La revisión y edición secuencial existen en Biblioteca y Radar; la orquestación transversal y la observabilidad avanzada están proyectadas.' },
] as const;

export default function ArchitectureLR(){
 return <section className={styles.panel} aria-labelledby="lr-architecture-title">
  <header className={styles.head}><span className={styles.kicker}>LIDERAZGO RESPONSABLE OS · DOCUMENTACIÓN</span><h2 id="lr-architecture-title">Arquitectura Tecnológica e Inteligencia Artificial</h2><p>Explora cómo se organiza la plataforma, cómo se coordinan sus especialistas y cómo circula la información.</p></header>
  <div className={styles.metrics}>{[['104','Perfiles especializados'],['3','Familias actuales'],['2','Harness multiagente'],['3','Rutas API']].map(([n,label])=><div key={label}><strong>{n}</strong><span>{label}</span></div>)}</div>
  <aside className={styles.note}><strong>Arquitectura actual y visión de evolución</strong><p>Los diagramas son una representación conceptual ampliada, no una certificación de producción. Los 104 perfiles comparten un proveedor configurable mediante OPENAI_MODEL. Los adaptadores multiproveedor, el registro central de skills y prompts, RAG y los Harness adicionales todavía son propuestas. Las revisiones por IA no equivalen a verificación externa.</p></aside>
  {diagrams.map((d,i)=><article className={styles.diagram} key={d.file}><div className={styles.heading}><span>0{i+1}</span><div><h3>{d.title}</h3><p>{d.text}</p></div></div><a className={styles.imageLink} href={'/arquitectura-lr/'+d.file} target="_blank" rel="noopener noreferrer" aria-label={'Ampliar '+d.title}><img src={'/arquitectura-lr/'+d.file} alt={d.title} width={1672} height={941} loading="lazy" decoding="async"/></a><div className={styles.actions}><a href={'/arquitectura-lr/'+d.file} target="_blank" rel="noopener noreferrer">Ver a tamaño completo ↗</a><a href={'/arquitectura-lr/'+d.file} download={d.file}>Guardar imagen JPG</a></div></article>)}
 </section>
}

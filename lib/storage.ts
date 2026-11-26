export function load<T>(key:string,fallback:T):T{
  if(typeof window==='undefined')return fallback;
  try{const raw=localStorage.getItem('lr-os:'+key);return raw?JSON.parse(raw) as T:fallback}catch{return fallback}
}
export function save<T>(key:string,value:T){if(typeof window!=='undefined')localStorage.setItem('lr-os:'+key,JSON.stringify(value))}
export function downloadJson(data:unknown,filename:string){
 const blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
 const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);
}

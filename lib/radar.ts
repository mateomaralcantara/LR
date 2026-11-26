export const radarGroups = [
 ['Dirección científica','Atlas Radar|Orquestación;Método|Diseño de estudios;Ética|Consentimiento y privacidad;Hipótesis|Preguntas investigables;Protocolo|Registro metodológico;Control|Validación de alcance'],
 ['Encuestas y campo','Encuesta|Cuestionarios neutrales;Muestra|Diseño muestral;Campo|Planificación de entrevistas;Panel|Reclutamiento con consentimiento;NoRespuesta|Sesgo de cobertura y respuesta;Auditor Campo|Controles de calidad'],
 ['Inteligencia social digital','Pulso|Tendencias públicas agregadas;Escucha|Fuentes públicas autorizadas;Temas|Clasificación temática;Sentimiento|Análisis agregado de textos;Redacción Digital|Contextualización mediática;Cobertura|Sesgo de plataforma'],
 ['Economía y mercado','Macro|Economía e inflación;Trabajo|Empleo;Consumo|Hábitos de consumo;Mercado|Competencia y sectores;Equidad|Pobreza y desigualdad;Empresa|Actividad empresarial'],
 ['Sociedad dominicana','Demografía|Población y hogares;Educa RD|Educación;Salud RD|Salud pública;Convivencia|Seguridad y prevención;Territorio|Servicios y municipios;Bienestar|Calidad de vida'],
 ['Inteligencia internacional','Mundo|Contexto global;Caribe|Comparación regional;Migración|Movilidad humana agregada;Desarrollo|Indicadores de desarrollo;Clima|Ambiente y riesgo;GlobalData|Comparabilidad internacional'],
 ['Institucionalidad','Gobierno|Servicios públicos;Transparencia|Rendición de cuentas;Participación|Participación ciudadana agregada;Lex Radar|Legislación;Instituciones|Capacidad administrativa;Política Pública|Evaluación de alternativas'],
 ['Ciencia de datos','Estadística|Distribuciones y estimación;Calidad|Datos faltantes y errores;Series|Series temporales;Visual|Visualización;Pondera|Ponderación y diseño;Causal|Límites de causalidad'],
 ['Verificación','Veritas Radar|Contraste de afirmaciones;Fuentes|Procedencia y fechas;Sesgo|Sesgos de medición;Réplica|Reproducibilidad;Privacidad|Minimización y anonimización;Evidencia|Grado de respaldo'],
 ['Producción de informes','Editorial Radar|Síntesis final;Informe|Redacción técnica;Resumen|Resumen ejecutivo;Escenarios|Escenarios condicionales;Comunicación|Presentación accesible;Metadatos|Ficha técnica y limitaciones'],
] as const;
export const radarAgents=radarGroups.flatMap(([group,entries],g)=>entries.split(';').map((entry,i)=>{const [name,specialty]=entry.split('|');return {id:`r${g*6+i+1}`,group,name,specialty}}));
export const radarSources=[
 ['ONE','República Dominicana · estadísticas oficiales','https://www.one.gob.do/publicaciones/'],
 ['Banco Central RD','Economía y estadísticas monetarias','https://www.bancentral.gov.do/'],
 ['Banco Mundial','Indicadores internacionales','https://data.worldbank.org/'],
 ['CEPALSTAT','América Latina y el Caribe','https://statistics.cepal.org/portal/cepalstat/'],
 ['ILOSTAT','Empleo y trabajo','https://ilostat.ilo.org/'],
 ['AAPOR','Buenas prácticas y transparencia de encuestas','https://aapor.org/standards-and-ethics/best-practices/'],
] as const;
export const radarTopics=['Economía y empleo','Educación','Salud','Seguridad y convivencia','Servicios públicos','Tecnología','Medioambiente','Migración','Mercado y consumo','Sociedad y cultura','Institucionalidad','Desarrollo internacional'] as const;
export type Survey={question:string;population:string;place:string;period:string;method:'voluntaria'|'probabilistica'|'otra';source:string;options:{label:string;count:number}[]};
export const blankSurvey:Survey={question:'',population:'',place:'República Dominicana',period:'',method:'voluntaria',source:'',options:[{label:'',count:0},{label:'',count:0},{label:'',count:0}]};
export function summarize(s:Survey){const n=s.options.reduce((sum,o)=>sum+o.count,0);return {n,results:s.options.map(o=>({...o,pct:n?100*o.count/n:0}))};}
export function validateSurvey(s:Survey){return !!(s.question.trim()&&s.population.trim()&&s.place.trim()&&s.period.trim()&&s.source.trim()&&s.options.length>=2&&s.options.length<=8&&s.options.every(o=>o.label.trim()&&Number.isSafeInteger(o.count)&&o.count>=0&&o.count<=100000000)&&summarize(s).n>0&&new Set(s.options.map(o=>o.label.trim().toLowerCase())).size===s.options.length);}
export function chooseRadar(topic:string){const routes:Record<string,string>={'Economía y empleo':'r19','Educación':'r26','Salud':'r27','Seguridad y convivencia':'r28','Servicios públicos':'r37','Tecnología':'r13','Medioambiente':'r35','Migración':'r33','Mercado y consumo':'r22','Sociedad y cultura':'r25','Institucionalidad':'r41','Desarrollo internacional':'r34'};return routes[topic]||'r2';}

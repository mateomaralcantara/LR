import {lrProjects} from './lr-projects';
export type Idea={id:string;title:string;category:string;description:string;votes:number;author:string;createdAt:string};
export type Project={id:string;title:string;category:string;status:'Idea'|'En estudio'|'En marcha';description:string;origin?:string};
export type Post={id:string;title:string;body:string;author:string;createdAt:string;likes:number};
export type ChatMessage={role:'user'|'assistant';content:string};
export const agents=[
 ['Atenea','Liderazgo ético','Formación en responsabilidad y liderazgo'],
 ['Civitas','Ciudadanía','Derechos, deberes y participación'],
 ['Cronos','Historia','Historia dominicana y mundial'],
 ['Ágora','Filosofía','Pensamiento crítico y ética'],
 ['Voz','Oratoria','Debate, exposición y comunicación'],
 ['Letras','Lectura','Lectura comprensiva y escritura'],
 ['PolíticaLab','Políticas públicas','Diseño y evaluación de políticas'],
 ['Gobierno 360','Gobierno digital','Servicios públicos y modernización'],
 ['Guardián','Seguridad','Prevención y convivencia'],
 ['Educa','Educación','Pedagogía y aprendizaje'],
 ['Salus','Salud pública','Sistemas sanitarios y prevención'],
 ['Ábaco','Economía','Economía y finanzas públicas'],
 ['Clara','Transparencia','Rendición de cuentas'],
 ['Municipio','Gestión municipal','Gobiernos locales'],
 ['Nova','Inteligencia artificial','IA responsable y sus aplicaciones'],
 ['Órbita','Innovación','Investigación y nuevas tecnologías'],
 ['Código','Programación','Desarrollo de software'],
 ['Horizonte','Prospectiva','Escenarios y tendencias futuras'],
 ['DataLab','Datos','Análisis estadístico y visualización'],
 ['Autómata','Automatización','Procesos y productividad'],
 ['Puentes','Mediación','Diálogo y resolución de conflictos'],
 ['Proyecta','Diseño de ideas','Estructuración de propuestas'],
 ['Impacto','Evaluación','Indicadores de impacto social'],
 ['Mentor Joven','Juventud','Orientación académica y profesional'],
] as const;
export const seedIdeas:Idea[]=[
 {id:'i1',title:'Un Estado digital sin filas',category:'Gobierno',description:'Simplificar trámites públicos con acceso digital, acompañamiento presencial y protección de datos.',votes:128,author:'Equipo editorial · ejemplo',createdAt:'2026-10-01'},
 {id:'i2',title:'Escuelas preparadas para la IA',category:'Educación',description:'Formación docente, pensamiento crítico y alfabetización digital con evaluación de resultados.',votes:96,author:'Equipo editorial · ejemplo',createdAt:'2026-10-02'},
 {id:'i3',title:'Municipios con presupuestos abiertos',category:'Transparencia',description:'Publicar gastos municipales en formatos comprensibles y auditables.',votes:84,author:'Equipo editorial · ejemplo',createdAt:'2026-10-03'},
 {id:'i4',title:'Prevención y seguridad comunitaria',category:'Seguridad',description:'Programas basados en evidencia y participación vecinal.',votes:72,author:'Equipo editorial · ejemplo',createdAt:'2026-10-04'},
];
export const seedProjects:Project[]=[
 ...lrProjects,
 {id:'p1',title:'Ventanilla ciudadana',category:'Gobierno',status:'Idea',description:'Mapa de servicios y requisitos de trámites.'},
 {id:'p2',title:'Aula de alfabetización digital',category:'Educación',status:'En estudio',description:'Programa modular de habilidades tecnológicas.'},
 {id:'p3',title:'Observatorio municipal',category:'Transparencia',status:'En marcha',description:'Tablero conceptual de indicadores públicos.'},
];
export const courses=[
 {title:'Fundamentos del liderazgo responsable',level:'Inicial',lessons:8,description:'Ética, servicio, responsabilidad y pensamiento crítico.'},
 {title:'Ciudadanía y participación',level:'Inicial',lessons:10,description:'Instituciones, derechos y deberes ciudadanos.'},
 {title:'Inteligencia artificial aplicada',level:'Intermedio',lessons:12,description:'Herramientas, límites, privacidad y casos de uso.'},
 {title:'Diseño de políticas públicas',level:'Avanzado',lessons:10,description:'Diagnóstico, indicadores, implementación y evaluación.'},
 {title:'Comunicación y debate público',level:'Intermedio',lessons:9,description:'Argumentación, evidencia y escucha activa.'},
 {title:'Datos para decisiones',level:'Intermedio',lessons:11,description:'Lectura de indicadores y visualización.'},
];
export const library=[
 {title:'Constitución de la República Dominicana',kind:'Marco jurídico',publisher:'Consultoría Jurídica del Poder Ejecutivo',url:'https://consultoria.gov.do/'},
 {title:'Biblioteca Digital Mundial',kind:'Biblioteca',publisher:'Library of Congress',url:'https://www.loc.gov/collections/world-digital-library/about-this-collection/'},
 {title:'Biblioteca Virtual Miguel de Cervantes',kind:'Literatura',publisher:'Fundación Biblioteca Virtual Miguel de Cervantes',url:'https://www.cervantesvirtual.com/'},
 {title:'UNESCO: Educación',kind:'Educación',publisher:'UNESCO',url:'https://www.unesco.org/es/education'},
 {title:'Datos Abiertos de República Dominicana',kind:'Datos públicos',publisher:'Gobierno dominicano',url:'https://datos.gob.do/'},
 {title:'Banco Mundial: Datos',kind:'Economía',publisher:'Banco Mundial',url:'https://datos.bancomundial.org/'},
];

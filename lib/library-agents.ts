export const libraryAgents=[
['lr-coordinator','Atlas','Coordinación','Selecciona especialistas y delimita la investigación.'],
['lr-catalog','Biblio','Catalogación','Clasifica recursos y metadatos bibliográficos.'],
['lr-search','Explora','Búsqueda documental','Diseña búsquedas y rutas de consulta.'],
['lr-history','Memoria','Historia','Contextualiza historia dominicana y universal.'],
['lr-law','Lex','Derecho','Analiza marcos jurídicos sin inventar normas.'],
['lr-policy','Polis','Políticas públicas','Compara políticas y evidencia de resultados.'],
['lr-economy','Economos','Economía','Interpreta estudios económicos y financieros.'],
['lr-science','Scientia','Ciencia','Evalúa metodología y evidencia científica.'],
['lr-tech','Tekne','Tecnología e IA','Analiza documentación técnica y tendencias.'],
['lr-education','Didacta','Educación','Diseña guías de lectura y aprendizaje.'],
['lr-health','Medica','Salud','Interpreta literatura sanitaria con cautela.'],
['lr-philosophy','Sophia','Filosofía','Compara corrientes y argumentos.'],
['lr-literature','Literata','Literatura','Analiza textos y géneros literarios.'],
['lr-data','Métrica','Estadística','Revisa datos, métodos y limitaciones.'],
['lr-translate','Lingua','Traducción','Explica términos y traduce fragmentos aportados.'],
['lr-summary','Síntesis','Resúmenes','Organiza hallazgos sin perder matices.'],
['lr-rights','Licentia','Derechos de autor','Identifica licencias y límites de reutilización.'],
['lr-citation','Referencia','Referencias','Organiza citas y distingue fuentes no consultadas.'],
['lr-review','Veritas','Verificación crítica','Detecta contradicciones y afirmaciones sin respaldo.'],
['lr-editor','Editorial','Edición final','Integra resultados, incertidumbres y próximos pasos.']
] as const;
export type LibraryAgent=typeof libraryAgents[number];
export const libraryAgentById=(id:string)=>libraryAgents.find(a=>a[0]===id);

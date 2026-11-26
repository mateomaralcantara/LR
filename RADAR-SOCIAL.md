# Radar Social

Módulo independiente no oficial de Liderazgo Responsable OS. 60 roles de IA en 10 unidades; no son 60 modelos ni procesos permanentes. El modo local genera un plan sin IA y calcula distribuciones sobre conteos aportados por el operador. No recoge respuestas, rastrea redes, consulta fuentes automáticamente ni realiza encuestas nacionales. Los datos se guardan en localStorage; el módulo ofrece exportación PDF. No usar datos personales. Los informes asistidos por IA no equivalen a evidencia empírica ni verificación externa.

## IA opcional (solo operador autorizado)

Añadir manualmente a `.env.local` del servidor `RADAR_ACCESS_TOKEN` (secreto aleatorio de al menos 24 caracteres) y `OPENAI_API_KEY`. No subir a GitHub. `OPENAI_MODEL` opcional. Reiniciar Next. Introducir el token privado en el campo del módulo; no se persiste. Por consulta se realizan hasta tres llamadas (especialista, revisión, edición). El directorio de fuentes es manual. La limitación de 15 segundos es por instancia, no un control distribuido ni un límite de gasto. Mantener deshabilitada en producción hasta disponer de autenticación, cuotas y supervisión. Revisar también los endpoints preexistentes antes de activar una clave global. 

## Verificación

`npm test`, `npm run build`, `npm run dev`. Las pruebas de Radar validan inventario, selección y cálculos. Para publicar, revisar diff, archivos staged y ausencia de secretos. No se modifica el almacenamiento de otros módulos.

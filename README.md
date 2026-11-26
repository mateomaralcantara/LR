# LIDERAZGO RESPONSABLE OS

Plataforma conceptual e independiente de participación ciudadana, aprendizaje y tecnología. **No es una aplicación oficial ni implica afiliación con José Laluz o alguna organización política.**

## Requisitos

- Node.js 20.9+ (recomendado Node 22 o 24)
- npm

## Ejecutar en Windows (PowerShell)

```powershell
cd "C:\ruta\liderazgo-responsable-os"
npm install
Copy-Item .env.example .env.local -ErrorAction SilentlyContinue
npm run dev
```

Abrir **http://localhost:3010**.

## ChatLR con IA real (opcional)

1. Copia `.env.example` a `.env.local`.
2. Agrega `OPENAI_API_KEY=tu_clave` al archivo `.env.local` **solo en el servidor**.
3. Ajusta `OPENAI_MODEL` a un modelo disponible en tu cuenta de API.
4. Reinicia `npm run dev`.

Si no configuras una clave, ChatLR mostrará claramente un modo de demostración. **El uso de la API puede generar costos.** Nunca publiques `.env.local` ni incluyas claves en código cliente.

## Módulos

- Inicio y panel de indicadores
- Ideas: crear, filtrar, buscar y apoyar una vez por navegador
- ChatLR: chat real opcional o demostración; selección de 24 agentes
- Biblioteca: enlaces a recursos públicos externos
- Agentes: 24 especialidades temáticas
- Proyectos: crear y cambiar estados en tablero
- Opinión: publicaciones y reacciones locales
- Academia: catálogo y marcadores de progreso (sin lecciones publicadas)
- Observatorio: métricas de datos locales
- Configuración: exportación/importación JSON y reinicio de datos

## Persistencia y limitaciones

Los datos se guardan en **localStorage** de cada navegador. No hay usuarios registrados, base de datos compartida, sincronización, votaciones verificadas ni moderación multiusuario. Las cifras y contenidos iniciales son **ilustrativos**, no datos oficiales. Las reacciones no están protegidas contra manipulación. La importación JSON es para copias de confianza. No uses esta versión para almacenar información sensible.

El endpoint `/api/chat` valida entradas y usa la clave únicamente en el servidor, pero **antes de un lanzamiento público** se requieren autenticación, rate limiting, límites de presupuesto, registros de seguridad, protección contra abuso, política de privacidad, moderación, accesibilidad auditada, pruebas end-to-end, persistencia en una base de datos y monitoreo.

## Verificaciones

```powershell
npm run lint
npm run build
npm run test
```

## Publicación

Puedes desplegar este proyecto Next.js en un proveedor compatible, por ejemplo Vercel, tras configurar variables de entorno y completar los controles de seguridad necesarios para un servicio público.

## Identidad visual

- Azul profundo `#0B1F3A`
- Dorado `#D4A63A`
- Azul eléctrico `#1565FF`
- Cian `#00C2FF`
- Blanco `#F8FAFC`

## Versión 2.0
20 iniciativas recopiladas, además de los tres proyectos de ejemplo anteriores. La migración local añade los nuevos IDs sin borrar proyectos existentes. Las atribuciones requieren cotejo con fuentes primarias; el estado es exclusivamente local.

Biblioteca: 20 perfiles adicionales y endpoint `/api/library`. Con OPENAI_API_KEY configurada, Atlas selecciona un especialista (o se elige manualmente), Veritas revisa y Editorial sintetiza. Máximo cuatro llamadas por consulta; sin clave, no se ejecutan llamadas. No hay RAG, navegación web, indexación automática ni verificación externa. Los fragmentos introducidos se envían al proveedor. No publicar el endpoint sin autenticación, cuotas y límites de gasto. Mantener .env.local privado.

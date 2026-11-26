import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Liderazgo Responsable OS | Conocimiento · Tecnología · Futuro',
  description: 'Plataforma conceptual de participación ciudadana, aprendizaje y tecnología.',
  applicationName: 'Liderazgo Responsable OS',
  metadataBase: new URL(process.env.LR_SITE_URL || (process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3010')),
  openGraph: {
    type: 'website',
    locale: 'es_DO',
    siteName: 'Liderazgo Responsable',
    title: 'LIDERAZGO RESPONSABLE',
    description: 'Ideas, proyectos, biblioteca y ChatLR. Conocimiento, tecnologia y futuro.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LIDERAZGO RESPONSABLE',
    description: 'Ideas, proyectos, biblioteca y ChatLR.',
  },
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body>{children}</body></html>;
}

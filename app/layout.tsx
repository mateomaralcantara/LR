import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'Liderazgo Responsable OS | Conocimiento · Tecnología · Futuro',
  description: 'Plataforma conceptual de participación ciudadana, aprendizaje y tecnología.',
  applicationName: 'Liderazgo Responsable OS',
};
export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="es"><body>{children}</body></html>;
}

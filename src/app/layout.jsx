import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "JAM Refrigeração | Manutenção de Geladeiras e Ar-Condicionado",
  description: "Seu eletrodoméstico parou? A JAM resolve. Serviço com técnico formado, garantia real e atendimento rápido.",
  keywords: ["conserto de geladeira", "manutenção ar-condicionado", "refrigeração", "JAM refrigeração", "técnico de refrigeração", "assistência técnica eletrodomésticos"],
  openGraph: {
    title: "JAM Refrigeração | Manutenção de Geladeiras e Ar-Condicionado",
    description: "Seu eletrodoméstico parou? A JAM resolve. Serviço com técnico formado, garantia real e atendimento rápido.",
    url: "https://jamrefrigeracao.com.br",
    siteName: "JAM Refrigeração",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  // Schema.org JSON-LD para SEO Local
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "JAM Refrigeração",
    "image": "https://jamrefrigeracao.com.br/logo.png",
    "description": "Serviço de manutenção e conserto de geladeiras, freezers e ar-condicionado com garantia real e atendimento rápido.",
    "telephone": "+5500000000000",
    "url": "https://jamrefrigeracao.com.br"
  };

  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body text-brand-gray bg-white scroll-smooth selection:bg-brand-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

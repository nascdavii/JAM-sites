import HeaderEletrica from "@/components/eletrica/HeaderEletrica";
import HeroEletrica from "@/components/eletrica/HeroEletrica";
import ServicosRapidosEletrica from "@/components/eletrica/ServicosRapidosEletrica";
import DorEletrica from "@/components/eletrica/DorEletrica";
import ViradaEletrica from "@/components/eletrica/ViradaEletrica";
import InvestimentoEletrica from "@/components/eletrica/InvestimentoEletrica";
import ServicosEletrica from "@/components/eletrica/ServicosEletrica";
import EngenheiroEletrica from "@/components/eletrica/EngenheiroEletrica";
import MotivoEletrica from "@/components/eletrica/MotivoEletrica";
import QuemSomosEletrica from "@/components/eletrica/QuemSomosEletrica";
import ComparativoEletrica from "@/components/eletrica/ComparativoEletrica";
import AreaAtendimentoEletrica from "@/components/eletrica/AreaAtendimentoEletrica";
import FaqEletrica from "@/components/eletrica/FaqEletrica";
import CtaEletrica from "@/components/eletrica/CtaEletrica";
import FooterEletrica from "@/components/eletrica/FooterEletrica";
import WhatsAppFlutuante from "@/components/eletrica/WhatsAppFlutuante";

export const metadata = {
    title: "Martins Engenharia — Perícia Judicial, Agrimensura e Regularização de Imóveis",
    description:
        "Especialistas em Regularização de Imóveis Rurais e Urbanos, Levantamento Planialtimétrico, Georreferenciamento e Perícia Judicial em Salvador e Bahia.",
};

export default function EletricaPage() {
    return (
        <main className="min-h-screen bg-white scroll-smooth">
            <HeaderEletrica />
            {/* 1. Hero — chamada principal */}
            <HeroEletrica />
            {/* 2. O que engloba o levantamento */}
            <ServicosRapidosEletrica />
            {/* 3. Dor — imóvel irregular é risco */}
            <DorEletrica />
            {/* 4. Virada — com vs sem levantamento */}
            <ViradaEletrica />
            {/* 5. Números — dados de impacto */}
            <InvestimentoEletrica />
            {/* 6. Serviços completos */}
            <ServicosEletrica />
            {/* 7. Quem assina — Engenheiro */}
            <EngenheiroEletrica />
            {/* 8. Para quem — advogados, investidores, proprietários */}
            <MotivoEletrica />
            {/* 9. Quem somos — filosofia da empresa */}
            <QuemSomosEletrica />
            {/* 10. Comparativo — Especializado vs Amador */}
            <ComparativoEletrica />
            {/* 11. Área de atendimento */}
            <AreaAtendimentoEletrica />
            {/* 12. FAQ */}
            <FaqEletrica />
            {/* 13. CTA final */}
            <CtaEletrica />
            <FooterEletrica />
            <WhatsAppFlutuante />
        </main>
    );
}

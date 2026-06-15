import { Refrigerator, Wind, Map, ChevronRight, HardHat, Compass } from "lucide-react";
import Link from "next/link";

// Mantendo as constantes exportadas
export const WHATSAPP_NUMBER = "5500000000000";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Olá! Preciso de ajuda. Pode me dar um orçamento?")}`;

export default function Home() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-between font-sans">
            <main className="w-full flex-grow flex flex-col items-center pt-16 pb-20 px-4">
                {/* Logos */}
                <div className="mb-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <img
                        src="https://i.imgur.com/J3ZAuv4.png"
                        alt="JAM Refrigeração"
                        className="h-24 md:h-28 w-auto object-contain drop-shadow-md"
                    />
                    <div className="hidden md:block w-px h-16 bg-gray-300"></div>
                    <img
                        src="https://i.imgur.com/djJwRJL.png"
                        alt="Martins Engenharia"
                        className="h-24 md:h-28 w-auto object-contain drop-shadow-md"
                    />
                </div>

                {/* Title */}
                <div className="flex items-center gap-4 mb-16 w-full max-w-3xl justify-center">
                    <div className="h-[2px] bg-gray-300 w-12 md:w-20"></div>
                    <h1 className="text-2xl md:text-3xl font-bold text-[#0B2046] tracking-tight">
                        Selecione a área de atendimento
                    </h1>
                    <div className="h-[2px] bg-gray-300 w-12 md:w-20"></div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {/* Card 1: Refrigeração */}
                    <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 bg-[#00A8E8] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            JAM
                        </div>
                        <div className="w-16 h-16 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-6 text-[#00A8E8] ring-4 ring-[#E0F2FE]/50">
                            <Refrigerator className="h-8 w-8 stroke-[1.5]" />
                        </div>
                        <h2 className="text-xl font-bold text-[#0B2046] mb-3">
                            Refrigeração
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            Conserto e manutenção de geladeira, freezer e máquina de lavar com garantia real.
                        </p>
                        <Link
                            href="/refrigeracao"
                            className="inline-flex items-center justify-center gap-2 bg-[#00A8E8] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#007EA7] transition-colors w-max"
                        >
                            Ver serviços <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Card 2: Climatização */}
                    <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-gray-100">
                        <div className="absolute top-0 right-0 bg-[#00A8E8] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            JAM
                        </div>
                        <div className="w-16 h-16 rounded-full bg-[#E0F2FE] flex items-center justify-center mb-6 text-[#00A8E8] ring-4 ring-[#E0F2FE]/50">
                            <Wind className="h-8 w-8 stroke-[1.5]" />
                        </div>
                        <h2 className="text-xl font-bold text-[#0B2046] mb-3">
                            Climatização
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            Instalação, higienização e manutenção de ar-condicionado com técnicos credenciados.
                        </p>
                        <Link
                            href="/climatizacao"
                            className="inline-flex items-center justify-center gap-2 bg-[#00A8E8] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#007EA7] transition-colors w-max"
                        >
                            Ver serviços <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>

                    {/* Card 3: Engenharia, Perícia & Agrimensura */}
                    <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border border-gray-100">
                        {/* Selo Martins */}
                        <div className="absolute top-0 right-0 bg-[#1B4332] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                            Martins Eng
                        </div>
                        <div className="w-16 h-16 rounded-full bg-[#1B4332]/10 flex items-center justify-center mb-6 text-[#1B4332] ring-4 ring-[#1B4332]/5">
                            <Compass className="h-8 w-8 stroke-[1.5]" />
                        </div>
                        <h2 className="text-xl font-bold text-[#1B4332] mb-3">
                            Engenharia & Perícia
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                            Engenharia Civil, Perícia Judicial, Agrimensura e Regularização de Imóveis.
                        </p>
                        <Link
                            href="/martins.eng"
                            className="inline-flex items-center justify-center gap-2 bg-[#1B4332] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#123024] transition-colors w-max"
                        >
                            Acessar página <ChevronRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </main>

            <footer className="w-full bg-white border-t border-gray-200 text-gray-500 text-center py-6 text-sm">
                <p>© 2026 <strong>JAM & Martins Engenharia</strong>. Todos os direitos reservados.</p>
            </footer>
        </div>
    );
}

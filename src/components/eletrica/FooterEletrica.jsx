"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";

const servicos = [
    "Perícia Judicial",
    "Agrimensura",
    "Regularização Imobiliária",
    "Eletrotécnica",
    "Levantamento Planialtimétrico",
    "Georreferenciamento",
];

const cidades = [
    "Salvador",
    "Lauro de Freitas",
    "Camaçari",
    "Simões Filho",
    "Dias d'Ávila",
    "Candeias",
];

export default function FooterEletrica() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-white/90 backdrop-blur-md text-gray-600 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.02)]">
            <div className="max-w-7xl mx-auto">
                {/* 4 colunas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Coluna 1 — Identidade */}
                    <div>
                        <div className="mb-6">
                            <img
                                src="https://i.imgur.com/djJwRJL.png"
                                alt="Martins Engenharia"
                                className="h-20 md:h-28 w-auto object-contain mix-blend-multiply"
                            />
                        </div>
                        <p className="text-sm mb-4">
                            Engenheiro Civil · CREA Registrado · Perito Judicial
                        </p>
                        <p className="text-sm italic text-gray-500 mb-6 leading-relaxed">
                            "Cada obra tem um responsável. O nosso nome está na ART."
                        </p>
                    </div>

                    {/* Coluna 2 — Contato */}
                    <div>
                        <h4 className="text-[#1B4332] font-bold mb-4">Contato & Horários</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">
                                    WhatsApp
                                </span>
                                <a
                                    href={WHATSAPP_LINK_ELETRICA}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#B07D46] transition-colors font-semibold"
                                >
                                    {/* TODO: substituir pelo número real */}
                                    (00) 00000-0000
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-400 block text-xs uppercase tracking-wider mb-0.5">
                                    Horário
                                </span>
                                Seg – Sex: 08h às 18h
                                <br />
                                Sábado: 08h às 12h
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3 — Área */}
                    <div>
                        <h4 className="text-[#1B4332] font-bold mb-4">Área de Atendimento</h4>
                        <ul className="space-y-2 text-sm font-medium">
                            {cidades.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 4 — Serviços */}
                    <div>
                        <h4 className="text-[#1B4332] font-bold mb-4">Serviços</h4>
                        <ul className="space-y-2 text-sm font-medium">
                            {servicos.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="border-t border-gray-200 pt-6 text-center text-xs text-gray-500 font-medium">
                    &copy; {year} Martins Engenharia. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

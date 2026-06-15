"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/app/page";

const servicos = [
    "Conserto de Geladeira",
    "Conserto de Freezer",
    "Manutenção de Ar-Condicionado",
    "Instalação de Ar-Condicionado",
    "Conserto de Máquina de Lavar",
    "Assistência Técnica Multimarcas",
];

const cidades = [
    "Salvador",
    "Lauro de Freitas",
    "Camaçari",
    "Simões Filho",
    "Candeias",
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#051126] text-gray-400 pt-16 pb-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                {/* 4 colunas */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Coluna 1 — Identidade */}
                    <div>
                        <img
                            src="https://i.imgur.com/J3ZAuv4.png"
                            alt="JAM Refrigeração e Climatização"
                            className="h-12 w-auto mb-4 object-contain"
                        />
                        <p className="text-sm mb-4">
                            Técnicos formados · Credenciados · Com garantia
                        </p>
                        <p className="text-sm italic text-gray-300 mb-6 leading-relaxed">
                            "Todo mundo merece se sentir confortável em casa."
                        </p>
                        <a
                            href={WHATSAPP_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-300"
                            aria-label="Falar com a JAM no WhatsApp"
                        >
                            <MessageCircle className="h-4 w-4" />
                            WhatsApp
                        </a>
                    </div>

                    {/* Coluna 2 — Contato */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contato & Horários</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">
                                    WhatsApp
                                </span>
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                >
                                    (71) 90000-0000
                                </a>
                            </li>
                            <li>
                                <span className="text-gray-500 block text-xs uppercase tracking-wider mb-0.5">
                                    Horário
                                </span>
                                Seg – Sex: 08h às 18h
                                <br />
                                Sábado: 08h às 12h
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3 — Área de Atendimento */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Área de Atendimento</h4>
                        <ul className="space-y-2 text-sm">
                            {cidades.map((c, i) => (
                                <li key={i}>{c}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Coluna 4 — Serviços */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Serviços</h4>
                        <ul className="space-y-2 text-sm">
                            {servicos.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Rodapé inferior */}
                <div className="border-t border-white/10 pt-6 text-center text-xs text-gray-500">
                    &copy; {year} JAM Refrigeração. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}

"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const martins = [
    "Equipamentos de alta precisão (Georreferenciamento)",
    "Laudos técnicos fundamentados para Justiça",
    "Visão de Engenharia Legal e Documental",
    "ART assinada por Engenheiro Especialista",
    "Acompanhamento do campo ao cartório",
];

const outros = [
    "Medições imprecisas sem georreferenciamento",
    "Falta de compatibilidade com a realidade jurídica do imóvel",
    "Trabalho superficial que gera conflitos com vizinhos",
    "Sem suporte em caso de exigências do cartório",
    "Documentação incompleta ou recusada em juízo",
];

export default function ComparativoEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] mb-4">
                        Levantamento Especializado vs. Medição Amadora
                    </h2>
                    <div className="w-20 h-1 bg-[#B07D46] mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Martins — coluna destaque */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-[#1B4332] rounded-2xl p-8 shadow-[0_8px_30px_rgba(11,32,70,0.25)]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-[#B07D46] rounded-full" />
                            <h3 className="text-white font-bold text-xl">A Martins Engenharia</h3>
                        </div>
                        <ul className="space-y-4">
                            {martins.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                                    <span className="text-gray-200 text-[15px] leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Outros — coluna apagada */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 bg-gray-300 rounded-full" />
                            <h3 className="text-gray-400 font-bold text-xl">Outros / Amadores</h3>
                        </div>
                        <ul className="space-y-4">
                            {outros.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <XCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                                    <span className="text-gray-400 text-[15px] leading-[1.7]">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

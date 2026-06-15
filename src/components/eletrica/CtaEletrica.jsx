"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";

export default function CtaEletrica() {
    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#1B4332] text-white relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-[#B07D46]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                {/* Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/25 px-4 py-1.5 rounded-full">
                        Atendimento Especializado
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.05 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                >
                    Transforme incertezas em segurança patrimonial.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-300 leading-[1.8] mb-10"
                >
                    Se você é <strong>proprietário rural, advogado ou investidor</strong> e deseja entender a real situação técnica e documental de um imóvel, entre em contato.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="bg-white/5 border border-white/10 text-gray-300 text-[17px] leading-[1.85] px-8 py-6 rounded-2xl mb-12 backdrop-blur-sm"
                >
                    Uma análise especializada no momento certo pode <strong>evitar problemas futuros</strong>, litígios e divergências de área. Proteja seu patrimônio com informações de qualidade.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href={WHATSAPP_LINK_ELETRICA}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white bg-green-600 rounded-xl shadow-[0_0_30px_rgba(22,163,74,0.25)] hover:bg-green-700 hover:-translate-y-1 transition-all duration-300"
                    >
                        <img src="https://i.imgur.com/VCgWVbX.png" alt="WhatsApp" className="h-8 w-8 object-contain drop-shadow-sm" />
                        Falar com Eng. José Augusto
                        <ArrowRight className="h-6 w-6" />
                    </a>
                    <p className="mt-5 text-sm text-gray-400 tracking-wide">
                        Atendimento direto · Sigilo profissional · Análise rigorosa
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

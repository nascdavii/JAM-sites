"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/app/page";

const contentMap = {
    refrigeracao: {
        title: "Qual aparelho está te dando trabalho?",
        subtitle: <>Geladeira, freezer ou máquina de lavar —<br />manda uma mensagem agora, sem compromisso.</>,
    },
    climatizacao: {
        title: "Precisando de ajuda com o ar-condicionado?",
        subtitle: <>Manutenção, limpeza ou instalação —<br />manda uma mensagem agora, sem compromisso.</>,
    }
};

// Seção de destaque → Dark Slate (#0B2046)
export default function CtaFinal({ variant = "refrigeracao" }) {
    const content = contentMap[variant] || contentMap.refrigeracao;

    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B2046] text-white relative overflow-hidden">
            {/* Brilho suave de fundo */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[600px] h-[600px] bg-[#00A8E8]/10 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
                >
                    {content.title}
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-xl text-gray-300 leading-[1.8] mb-10"
                >
                    {content.subtitle}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="bg-white/5 border border-white/10 text-gray-300 text-[17px] leading-[1.85] px-8 py-6 rounded-2xl mb-12 backdrop-blur-sm"
                >
                    A gente faz o <strong className="text-white">diagnóstico</strong>, te
                    diz o que está errado e{" "}
                    <strong className="text-white">quanto custa resolver</strong>. Você
                    decide se quer seguir. Simples assim.
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-8 py-5 text-lg font-bold text-white bg-green-600 rounded-xl shadow-[0_0_30px_rgba(22,163,74,0.25)] hover:bg-green-700 hover:-translate-y-1 transition-all duration-300"
                    >
                        <MessageCircle className="h-6 w-6" />
                        Falar com a JAM no WhatsApp
                        <ArrowRight className="h-6 w-6" />
                    </a>
                    <p className="mt-5 text-sm text-gray-400 tracking-wide">
                        Atendimento rápido · Orçamento sem surpresa · Garantia no serviço
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

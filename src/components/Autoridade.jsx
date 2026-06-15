"use client";

import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Wrench } from "lucide-react";

// Zebra: Seção 3 → Cinza Gelo (#F4F5F7)
export default function Autoridade() {
    const points = [
        {
            icon: <Wrench className="h-6 w-6 text-[#00A8E8]" />,
            title: "Diagnóstico Correto",
            desc: "Na primeira visita. Sem tentativas aleatórias ou chutes.",
        },
        {
            icon: <UserCheck className="h-6 w-6 text-[#00A8E8]" />,
            title: "Orçamento Transparente",
            desc: "Antes de qualquer serviço. Você decide se avança. Sem surpresas.",
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-[#00A8E8]" />,
            title: "Garantia Real",
            desc: "No que foi feito. Compromisso assinado com o resultado.",
        },
    ];

    return (
        <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7] scroll-mt-20">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Texto e Cards */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] mb-4 leading-tight">
                        Técnico com nome, formação e uniforme
                    </h2>
                    <p className="text-xl text-[#00A8E8] font-semibold mb-8">
                        Não é qualquer um entrando na sua casa.
                    </p>
                    <div className="space-y-5 text-lg text-[#4A5568] leading-[1.85] mb-10">
                        <p>
                            A JAM é formada por técnicos credenciados em instituições
                            reconhecidas. Isso significa diagnóstico correto na primeira
                            visita.
                        </p>
                        <p className="font-medium text-[#0B2046]">
                            Você merece saber o que está errado, quanto vai custar e quando
                            vai ficar pronto — antes de dizer sim.
                        </p>
                    </div>

                    <div className="grid gap-5">
                        {points.map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                                className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-transform duration-300"
                            >
                                <div className="w-12 h-12 bg-[#00A8E8]/10 rounded-xl flex items-center justify-center shrink-0">
                                    {point.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#0B2046] mb-1.5">
                                        {point.title}
                                    </h3>
                                    <p className="text-[#4A5568] leading-[1.8] text-[15px]">
                                        {point.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Imagem (Retrato) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-[#00A8E8]"
                >
                    <img
                        src="https://i.imgur.com/qNru9Hx.png"
                        alt="Técnico Profissional JAM"
                        className="w-full h-auto object-cover object-top aspect-[4/5] mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 opacity-90 hover:opacity-100"
                    />
                </motion.div>
            </div>
        </section>
    );
}

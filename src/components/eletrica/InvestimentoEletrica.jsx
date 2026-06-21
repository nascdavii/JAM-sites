"use client";

import { motion } from "framer-motion";
import { TrendingUp, ShieldCheck, Landmark } from "lucide-react";

export default function InvestimentoEletrica() {
    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#1B4332] text-white relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[700px] h-[700px] bg-[#B07D46]/8 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/25 px-4 py-1.5 rounded-full">
                        Dados que importam
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-white text-center mb-6 leading-tight"
                >
                    Regularização não é custo.{" "}
                    <span className="text-[#B07D46]">
                        É proteção patrimonial.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-lg text-gray-300 leading-[1.85] mb-16 max-w-2xl mx-auto"
                >
                    Imóveis regularizados têm maior valor de mercado, acesso a financiamentos e segurança jurídica para qualquer tipo de transação ou sucessão.
                </motion.p>

                {/* Benefícios Qualitativos */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <TrendingUp className="h-8 w-8" />,
                            title: "Valorização de Mercado",
                            desc: "Um imóvel totalmente regularizado sofre uma valorização imediata e atrai compradores qualificados muito mais rápido.",
                            delay: 0.3,
                        },
                        {
                            icon: <Landmark className="h-8 w-8" />,
                            title: "Aprovação em Financiamentos",
                            desc: "Bancos e instituições financeiras exigem documentação técnica e legal impecável para liberar crédito e financiamento rural.",
                            delay: 0.45,
                        },
                        {
                            icon: <ShieldCheck className="h-8 w-8" />,
                            title: "Segurança Jurídica",
                            desc: "Evite bloqueios em inventários, disputas de limites com vizinhos e litígios prolongados com laudos definitivos.",
                            delay: 0.6,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="bg-white/5 border border-white/10 rounded-2xl px-8 py-10 text-center backdrop-blur-sm hover:bg-white/10 transition-colors duration-300"
                        >
                            <div className="w-16 h-16 mx-auto bg-[#B07D46]/20 text-[#B07D46] rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-300 text-[15px] leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

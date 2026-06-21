"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";
import { ArrowRight, Calculator, ShieldCheck, Zap, Calendar, MessageCircle } from "lucide-react";

export default function HeroEletrica() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
            {/* Background Image — subtle texture or solid color */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1B4332] to-[#143325]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Text Content */}
                <div className="text-left">
                    {/* Pill */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block text-sm font-semibold uppercase tracking-widest text-[#B07D46] mb-6 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full"
                    >
                        Martins Engenharia e Soluções Imobiliárias
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                    >
                        Excelência em Engenharia Civil, <br className="hidden lg:block"/>
                        <span className="text-[#B07D46]">
                            Perícia e Regularização.
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                        className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl"
                    >
                        Especialista em Avaliação de Imóveis, Levantamento Planialtimétrico e Soluções Técnicas para proprietários, advogados e investidores em Salvador, Bahia e Alagoas.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        className="mb-12"
                    >
                        <a
                            href={WHATSAPP_LINK_ELETRICA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-green-600 rounded-md shadow-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <MessageCircle className="h-5 w-5" /> 
                            Falar com um Engenheiro
                            <ArrowRight className="h-5 w-5" />
                        </a>
                    </motion.div>

                    {/* Trust badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        {[
                            { icon: <ShieldCheck className="h-4 w-4" />, label: "Engenharia Civil" },
                            { icon: <ShieldCheck className="h-4 w-4" />, label: "Perícia Judicial" },
                            { icon: <ShieldCheck className="h-4 w-4" />, label: "Agrimensura" },
                            { icon: <ShieldCheck className="h-4 w-4" />, label: "Eletrotécnica" },
                        ].map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
                            >
                                <span className="text-[#B07D46]">{badge.icon}</span>
                                {badge.label}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative hidden lg:block"
                >
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                        {/* Overlay to blend image nicely with dark theme */}
                        <div className="absolute inset-0 bg-[#1B4332]/20 z-10 pointer-events-none" />
                        <img 
                            src="https://imgur.com/tA9sQeH.jpg" 
                            alt="Engenheiro Agrimensor com equipamento topográfico" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    {/* Decorative element */}
                    <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#B07D46]/20 rounded-full blur-xl z-0" />
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-green-500/10 rounded-full blur-2xl z-0" />
                </motion.div>

            </div>
        </section>
    );
}

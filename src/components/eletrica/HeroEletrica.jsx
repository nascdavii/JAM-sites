"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";
import { ArrowRight, Calculator, ShieldCheck, Zap, Calendar } from "lucide-react";

export default function HeroEletrica() {
    return (
        <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20">
            {/* Background Image — rural landscape / topography */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2064&auto=format&fit=crop')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Overlay azul escuro */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1B4332]/70 via-[#1B4332]/80 to-[#1B4332]" />

            <div className="relative z-10 max-w-4xl mx-auto text-center py-20">
                {/* Pill */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-sm font-semibold uppercase tracking-widest text-[#B07D46] mb-6 bg-white/10 border border-white/15 px-4 py-1.5 rounded-full"
                >
                    Engenharia Civil · Perícia · Agrimensura
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                    Regularização de Imóveis Rurais <br />
                    <span className="text-[#B07D46]">
                        Começa com Informação de Qualidade.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl mx-auto"
                >
                    Muitos acreditam que a regularização depende apenas de documentos. A realidade é que o <strong>levantamento planialtimétrico</strong> é o pilar para um processo seguro, evitando divergências de área e conflitos.
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
                        <Calculator className="h-5 w-5" /> {/* TODO: Maybe change icon to Map or MessageCircle */}
                        Consultar Situação do Imóvel
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-wrap items-center justify-center gap-4 md:gap-8"
                >
                    {[
                        { icon: <ShieldCheck className="h-4 w-4" />, label: "Segurança Jurídica" },
                        { icon: <Zap className="h-4 w-4" />, label: "Levantamento Técnico" },
                        { icon: <Calendar className="h-4 w-4" />, label: "Valorização Patrimonial" },
                    ].map((badge, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-300 bg-white/10 border border-white/15 px-4 py-2 rounded-full"
                        >
                            <span className="text-[#B07D46]">{badge.icon}</span>
                            {badge.label}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

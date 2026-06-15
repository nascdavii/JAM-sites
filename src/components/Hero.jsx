"use client";

import { motion } from "framer-motion";
import { WHATSAPP_LINK } from "@/app/page";
import { ArrowRight, MessageCircle } from "lucide-react";

const contentMap = {
    refrigeracao: {
        badge: "Técnicos Credenciados · Atendimento Rápido · Garantia Real",
        title: "Geladeira parada?",
        highlight: "A sua comida não pode esperar.",
        desc: "Conserto de geladeira, freezer e máquina de lavar com diagnóstico no mesmo dia e garantia real de 90 dias.",
        bgImage: "url('https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop')"
    },
    climatizacao: {
        badge: "Instalação · Limpeza · Manutenção",
        title: "Ar-condicionado ligado, mas sem refrescar?",
        highlight: "Isso tem conserto.",
        desc: "Instalação, higienização e manutenção de ar-condicionado com diagnóstico rápido e garantia de satisfação.",
        bgImage: "url('https://images.unsplash.com/photo-1626015467362-7936a2eebafb?q=80&w=2070&auto=format&fit=crop')"
    }
};

export default function Hero({ variant = "refrigeracao" }) {
    const content = contentMap[variant] || contentMap.refrigeracao;

    return (
        <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: content.bgImage,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Gradient Overlay: transparent top → Dark Slate bottom */}
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-[#0B2046]/70 to-[#0B2046]" />

            <div className="relative z-10 max-w-3xl mx-auto text-center py-28">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block text-sm font-semibold uppercase tracking-widest text-[#00A8E8] mb-6 bg-white/10 px-4 py-1.5 rounded-full"
                >
                    {content.badge}
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
                >
                    {content.title}{" "}
                    <span className="text-[#00A8E8]">
                        {content.highlight}
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
                    className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl mx-auto"
                >
                    {content.desc}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.45 }}
                >
                    <a
                        href={WHATSAPP_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#00A8E8] rounded-md shadow-lg hover:bg-[#007EA7] hover:-translate-y-0.5 transition-all duration-300"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Falar com a JAM agora
                        <ArrowRight className="h-5 w-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

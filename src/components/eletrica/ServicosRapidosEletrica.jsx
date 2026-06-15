"use client";

import { motion } from "framer-motion";
import { Maximize, Navigation, Map, Home, Truck, Waves, Settings } from "lucide-react";

const servicos = [
    {
        title: "Limites da Propriedade",
        icon: <Maximize className="h-6 w-6" />,
    },
    {
        title: "Confrontações",
        icon: <Navigation className="h-6 w-6" />,
    },
    {
        title: "Relevo do Terreno",
        icon: <Map className="h-6 w-6" />,
    },
    {
        title: "Benfeitorias Existentes",
        icon: <Home className="h-6 w-6" />,
    },
    {
        title: "Acessos",
        icon: <Truck className="h-6 w-6" />,
    },
    {
        title: "Cursos D'água",
        icon: <Waves className="h-6 w-6" />,
    },
    {
        title: "Características Físicas",
        icon: <Settings className="h-6 w-6" />,
    },
];

export default function ServicosRapidosEletrica() {
    return (
        <section id="servicos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[#1B4332] mb-4">
                        O que engloba o Levantamento Planialtimétrico?
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Muito além de uma simples medição de áreas, trata-se de um estudo técnico detalhado que mapeia com precisão todas as características que influenciam na situação jurídica e cadastral do imóvel:
                    </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {servicos.map((svc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 bg-[#F4F5F7] hover:bg-[#E2E8F0] px-6 py-4 rounded-xl transition-colors duration-300 w-full sm:w-auto shadow-sm"
                        >
                            <div className="text-[#B07D46]">{svc.icon}</div>
                            <span className="font-bold text-[#1B4332] text-[15px]">{svc.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

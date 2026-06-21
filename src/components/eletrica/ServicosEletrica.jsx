"use client";

import { motion } from "framer-motion";
import { Scale, FileCheck, Compass, Zap, Building2 } from "lucide-react";

export default function ServicosEletrica() {
    const cards = [
        {
            icon: <Building2 className="h-7 w-7 text-white" />,
            title: "Engenharia Civil",
            desc: "Projetos Residenciais, Fiscalização de Obras, Inspeção Predial e análise detalhada de Patologia das Construções.",
        },
        {
            icon: <Scale className="h-7 w-7 text-white" />,
            title: "Perícia e Avaliações",
            desc: "Avaliação Mercadológica de Imóveis Urbanos e Rurais, Laudos Técnicos, Perícias Técnicas e Assistência Técnica Judicial.",
        },
        {
            icon: <FileCheck className="h-7 w-7 text-white" />,
            title: "Regularização Imobiliária",
            desc: "Usucapião, Retificação de Área, Desmembramento, Unificação de Imóveis e Inventário Imobiliário.",
        },
        {
            icon: <Compass className="h-7 w-7 text-white" />,
            title: "Agrimensura",
            desc: "Levantamento Planialtimétrico detalhado, Georreferenciamento de imóveis e serviços completos de Topografia.",
        },
        {
            icon: <Zap className="h-7 w-7 text-white" />,
            title: "Eletrotécnica",
            desc: "Projetos Elétricos, Instalações Residenciais, emissão de Laudos Elétricos e Inspeções Elétricas.",
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] mb-4">
                        Nossos serviços especializados
                    </h2>
                    <div className="w-20 h-1 bg-[#B07D46] mx-auto rounded-full" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 group"
                        >
                            <div className="w-14 h-14 bg-[#B07D46] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#8A6237] transition-colors duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-[17px] font-bold text-[#1B4332] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[#4A5568] leading-[1.85] text-[15px]">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

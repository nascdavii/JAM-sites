"use client";

import { motion } from "framer-motion";
import { Scale, MapPin, FileText, Compass, Ruler } from "lucide-react";

export default function ServicosEletrica() {
    const cards = [
        {
            icon: <Scale className="h-7 w-7 text-white" />,
            title: "Perícia Judicial",
            desc: "Laudos técnicos e pareceres fundamentados para processos judiciais envolvendo questões imobiliárias, possessórias e indenizatórias. Perito habilitado, documentação aceita em juízo.",
        },
        {
            icon: <Compass className="h-7 w-7 text-white" />,
            title: "Agrimensura e Georreferenciamento",
            desc: "Levantamento topográfico e georreferenciamento de propriedades rurais e urbanas com equipamentos de alta precisão, atendendo às normas do INCRA e cartórios.",
        },
        {
            icon: <FileText className="h-7 w-7 text-white" />,
            title: "Regularização de Imóveis",
            desc: "Regularização fundiária de propriedades rurais e urbanas, incluindo retificação de área, desmembramento, unificação e adequação documental para registro.",
        },
        {
            icon: <Ruler className="h-7 w-7 text-white" />,
            title: "Levantamento Planialtimétrico",
            desc: "Mapeamento completo de limites, relevo, confrontações, benfeitorias, cursos d'água e acessos — base técnica para qualquer processo de regularização.",
        },
        {
            icon: <MapPin className="h-7 w-7 text-white" />,
            title: "Laudos Técnicos e ART",
            desc: "Elaboração de laudos técnicos com ART assinada por engenheiro especialista. Documentação aceita por cartórios, bancos e instâncias judiciais.",
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

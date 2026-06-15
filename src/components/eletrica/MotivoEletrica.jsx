"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Scale, TrendingUp } from "lucide-react";

const publicos = [
    {
        icon: <AlertTriangle className="h-6 w-6 text-[#B07D46]" />,
        title: "Divergências e Conflitos",
        desc: "A ausência de informações confiáveis gera divergências de área, conflitos com confrontantes e atrasos em processos de desmembramento, unificação e financiamentos rurais.",
    },
    {
        icon: <Scale className="h-6 w-6 text-[#B07D46]" />,
        title: "Para Advogados",
        desc: "Em demandas possessórias, usucapião ou inventários rurais, o levantamento planialtimétrico representa uma ferramenta essencial para a produção de provas técnicas robustas e fundamentadas.",
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-[#B07D46]" />,
        title: "Para Investidores",
        desc: "Conhecer exatamente as características físicas e os limites reais de uma propriedade é uma etapa indispensável para minimizar riscos e garantir segurança na tomada de decisão.",
    },
];

export default function MotivoEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-6 leading-tight">
                        A regularização é um investimento, <br className="hidden md:block"/> não apenas uma exigência legal.
                    </h2>
                    <p className="text-lg text-gray-500 max-w-3xl mx-auto">
                        Ela agrega valor patrimonial, proporciona segurança jurídica e amplia as oportunidades de negociação e desenvolvimento da propriedade.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {publicos.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-transform duration-300"
                        >
                            <div className="w-14 h-14 bg-[#B07D46]/10 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1B4332] mb-3">
                                {item.title}
                            </h3>
                            <p className="text-[#4A5568] leading-[1.8] text-[15px]">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


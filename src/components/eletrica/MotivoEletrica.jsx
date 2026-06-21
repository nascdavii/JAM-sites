"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Scale, TrendingUp } from "lucide-react";

const publicos = [
    {
        icon: <AlertTriangle className="h-6 w-6 text-[#B07D46]" />,
        title: "Divergências e Conflitos",
        desc: [
            "Evita atrasos em desmembramentos e financiamentos.",
            "Resolve divergências e sobreposição de limites.",
            "Previne litígios caros e prolongados com vizinhos."
        ],
    },
    {
        icon: <Scale className="h-6 w-6 text-[#B07D46]" />,
        title: "Para Advogados",
        desc: [
            "Garante a produção de provas técnicas robustas.",
            "Acelera ações possessórias e processos de usucapião.",
            "Fornece base sólida para inventários rurais."
        ],
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-[#B07D46]" />,
        title: "Para Investidores",
        desc: [
            "Mapeia a realidade física e limites do ativo.",
            "Mitiga drasticamente os riscos da aquisição.",
            "Garante total segurança para a tomada de decisão."
        ],
    },
];

export default function MotivoEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-6xl mx-auto">
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

                <div className="grid md:grid-cols-3 gap-8">
                    {publicos.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white border border-gray-100 p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            <div className="w-14 h-14 bg-[#B07D46]/10 rounded-2xl flex items-center justify-center mb-6">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#1B4332] mb-5">
                                {item.title}
                            </h3>
                            <ul className="space-y-3">
                                {item.desc.map((bullet, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-[#4A5568] text-[15px] leading-relaxed">
                                        <span className="text-[#B07D46] font-bold mt-0.5">•</span>
                                        <span>{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}


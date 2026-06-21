"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const bullets = [
    { title: "Avaliação de Imóveis Urbanos e Rurais", desc: "" },
    { title: "Regularização Imobiliária", desc: "" },
    { title: "Levantamentos Topográficos", desc: "" },
    { title: "Perícias Técnicas", desc: "" },
    { title: "Georreferenciamento", desc: "" },
    { title: "Instalações Elétricas Residenciais", desc: "" },
];

export default function EngenheiroEletrica() {
    return (
        <section id="engenheiro" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/20 px-4 py-1.5 rounded-full mb-6">
                        Responsabilidade Técnica
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] mb-4 leading-tight">
                        José Augusto Martins
                    </h2>
                    <p className="text-xl text-[#B07D46] font-semibold mb-6 leading-relaxed">
                        Engenheiro Civil | Perito Avaliador de Imóveis | Agrimensor | Técnico em Eletrotécnica
                    </p>
                    
                    <div className="bg-[#F4F5F7] border-l-4 border-[#B07D46] p-6 rounded-r-xl mb-8 italic text-gray-600 text-lg">
                        "Profissional multidisciplinar dedicado a entregar soluções completas em engenharia, perícia, agrimensura e regularização imobiliária, garantindo a segurança jurídica e a valorização do seu patrimônio."
                    </div>

                    <div className="space-y-4 mb-8">
                        {bullets.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />
                                <p className="font-bold text-[#1B4332] text-[16px]">
                                    {item.title}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="inline-block bg-[#1B4332]/5 rounded-lg px-5 py-3 border border-[#1B4332]/10 text-[#1B4332] font-semibold text-sm">
                        📍 Atendimento em todo o estado da Bahia / Alagoas
                    </div>
                </motion.div>

                {/* Foto do Engenheiro */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="flex justify-center relative group"
                >
                    <div className="relative w-80 h-[400px] md:w-[420px] md:h-[520px] rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332]/60 via-transparent to-transparent z-10" />
                        <img
                            src="https://i.imgur.com/Przv2jv.png"
                            alt="Eng. José Augusto Martins"
                            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute bottom-6 left-6 right-6 z-20">
                            <p className="text-white font-bold text-xl">Eng. José Augusto Martins</p>
                            <p className="text-gray-200 text-sm">CREA Registrado</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

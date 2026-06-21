"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function QuemSomosEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-1.5 mb-8"
                >
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                            key={s}
                            className="h-7 w-7 text-yellow-400 fill-yellow-400"
                        />
                    ))}
                </motion.div>

                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/20 px-4 py-1.5 rounded-full mb-6"
                >
                    Quem somos
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-10 leading-tight"
                >
                    Não entregamos apenas mapas.{" "}
                    <span className="text-[#B07D46]">Entregamos segurança jurídica.</span>
                </motion.h2>

                <div className="bg-[#F4F5F7] rounded-2xl border border-gray-100 px-8 md:px-12 py-10 space-y-6 text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-[#4A5568] text-lg leading-[1.85]"
                    >
                        Somos liderados por um Engenheiro Civil especializado em Avaliação de Imóveis Urbanos e Rurais, Regularização Imobiliária, Agrimensura e Eletrotécnica. 
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold text-[#1B4332] py-2 border-t border-b border-gray-200"
                    >
                        Nossa atuação é focada em resultados precisos e segurança jurídica.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-[#4A5568] text-lg leading-[1.85]"
                    >
                        Possuímos vasta experiência e atuação em levantamentos planialtimétricos, georreferenciamento, usucapião, inventários, desmembramentos, unificações, laudos técnicos, inspeções prediais, patologia das construções e instalações elétricas residenciais.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-[#4A5568] text-lg leading-[1.85] font-semibold"
                    >
                        Nossos serviços são prestados para proprietários, advogados, empresas e investidores, sempre com o compromisso de máxima excelência técnica.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}

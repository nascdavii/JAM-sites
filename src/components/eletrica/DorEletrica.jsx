"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function DorEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
                {/* Imagem */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 order-last lg:order-first"
                >
                    <img 
                        src="https://imgur.com/fURVwQA.jpg" 
                        alt="Documentos, planta topográfica e ferramentas de engenharia sobre a mesa" 
                        className="w-full h-full object-cover"
                    />
                </motion.div>

                {/* Texto */}
                <div className="text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-500 rounded-xl mb-6">
                            <AlertTriangle className="h-6 w-6" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-8 leading-tight">
                            Imóvel irregular é patrimônio em risco.
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-5"
                    >
                        <p className="text-[#4A5568] text-lg leading-[1.8]">
                            Segundo dados do INCRA, <strong className="text-[#1B4332]">mais de 60% das propriedades rurais no Brasil possuem algum tipo de inconsistência cadastral.</strong>
                        </p>
                        
                        <p className="text-[#4A5568] text-lg leading-[1.8]">
                            Problemas que se acumulam silenciosamente e se tornam barreiras:
                        </p>

                        <ul className="space-y-3 mb-6 pl-2">
                            <li className="flex items-start gap-3 text-[#4A5568] text-lg">
                                <span className="text-[#B07D46] font-bold mt-1">•</span>
                                <span>Divergências de área e limites imprecisos.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#4A5568] text-lg">
                                <span className="text-[#B07D46] font-bold mt-1">•</span>
                                <span>Dificuldade para advogados na produção de provas e ações possessórias.</span>
                            </li>
                            <li className="flex items-start gap-3 text-[#4A5568] text-lg">
                                <span className="text-[#B07D46] font-bold mt-1">•</span>
                                <span>Risco financeiro alto para investidores e compradores.</span>
                            </li>
                        </ul>

                        <div className="bg-white border-l-4 border-[#1B4332] p-5 rounded-r-xl shadow-sm">
                            <p className="text-[#1B4332] text-lg font-semibold leading-relaxed">
                                A solução começa com um diagnóstico técnico preciso. O levantamento planialtimétrico é a base para qualquer regularização segura e defensável juridicamente.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function DorEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl mb-8">
                        <AlertTriangle className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-12 leading-tight">
                        Imóvel irregular é patrimônio em risco.
                    </h2>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 md:px-14 py-10 text-left space-y-6">
                    {[
                        <>
                            Segundo dados do INCRA, <strong className="text-[#1B4332]">mais de 60% das propriedades rurais no Brasil possuem algum tipo de inconsistência cadastral.</strong>{" "}
                            Divergências de área, limites imprecisos e documentação desatualizada são problemas que se acumulam silenciosamente — até que um processo judicial, uma venda ou um financiamento bancário os torna visíveis.
                        </>,
                        <>
                            Para <strong className="text-[#1B4332]">advogados</strong>, a ausência de um levantamento técnico fundamentado compromete a produção de provas em ações possessórias, inventários e usucapião. Para <strong className="text-[#1B4332]">investidores</strong>, negociar sem conhecer a realidade física do imóvel é assumir um risco desnecessário.
                        </>,
                        <>
                            A solução começa com um diagnóstico técnico preciso.{" "}
                            <strong className="text-[#1B4332]">
                                O levantamento planialtimétrico é a base para qualquer regularização segura e defensável juridicamente.
                            </strong>
                        </>,
                    ].map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.15 }}
                            className="text-[#4A5568] text-lg leading-[1.85]"
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            </div>
        </section>
    );
}

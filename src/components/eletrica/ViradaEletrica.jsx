"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

export default function ViradaEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] leading-tight">
                        Regularizar não é burocracia.{" "}
                        <span className="text-[#B07D46]">
                            É proteger o que é seu.
                        </span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="bg-red-50 border border-red-100 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-5 text-red-600">
                            <XCircle className="h-7 w-7 shrink-0" />
                            <h3 className="text-xl font-bold">Sem levantamento técnico</h3>
                        </div>
                        <p className="text-[#4A5568] leading-[1.85] text-[17px]">
                            Limites imprecisos, divergência entre a área real e a escriturada, conflitos com confrontantes e{" "}
                            <strong>impossibilidade de financiar, vender ou transmitir o imóvel</strong>{" "}
                            de forma segura. Problemas que só aparecem quando já é tarde.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#B07D46]/5 border border-[#B07D46]/20 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-5 text-[#8A6237]">
                            <CheckCircle2 className="h-7 w-7 shrink-0" />
                            <h3 className="text-xl font-bold">Com levantamento especializado</h3>
                        </div>
                        <p className="text-[#4A5568] leading-[1.85] text-[17px]">
                            Propriedade com <strong>limites definidos por georreferenciamento</strong>, documentação aceita em cartório e juízo, segurança para negociação e{" "}
                            <strong>valorização patrimonial comprovada</strong>. Um investimento que se paga na primeira transação.
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14 text-center text-xl md:text-2xl font-medium text-[#1B4332] leading-[1.7]"
                >
                    Cada dia com a situação irregular é um risco que você
                    <br />
                    assume{" "}
                    <span className="underline decoration-red-400 decoration-[3px] underline-offset-4">
                        desnecessariamente.
                    </span>
                </motion.p>
            </div>
        </section>
    );
}

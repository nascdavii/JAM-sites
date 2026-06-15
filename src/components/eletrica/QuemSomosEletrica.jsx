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
                    {[
                        "Muitos profissionais realizam medições superficiais, sem embasamento legal ou compatibilidade com as exigências dos cartórios e tribunais. O resultado? Conflitos com confrontantes, processos travados e patrimônio desvalorizado.",
                        null,
                        "A Martins Engenharia foi fundada com uma filosofia diferente: precisão técnica aliada a visão jurídica. Cada levantamento é conduzido com equipamentos de georreferenciamento de alta precisão, e cada laudo é elaborado para ser aceito em juízo.",
                        "Acompanhamos o processo de regularização ou perícia do início ao fim — da primeira visita de campo até a entrega do laudo técnico fundamentado. Sem etapas soltas, sem improvisos.",
                    ].map((text, i) =>
                        text === null ? (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xl font-bold text-[#1B4332] py-2 border-t border-b border-gray-200"
                            >
                                A Martins não funciona assim.
                            </motion.p>
                        ) : (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-[#4A5568] text-lg leading-[1.85]"
                            >
                                {text}
                            </motion.p>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}

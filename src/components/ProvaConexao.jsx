"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Zebra: Seção 5 → Cinza Gelo (#F4F5F7)
export default function ProvaConexao() {
    return (
        <section id="depoimentos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7] scroll-mt-20">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center gap-1.5 mb-8"
                >
                    {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="h-7 w-7 text-yellow-400 fill-yellow-400" />
                    ))}
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold text-[#0B2046] mb-10 leading-tight"
                >
                    Não somos a empresa que some{" "}
                    <span className="text-[#00A8E8]">depois que recebe.</span>
                </motion.h2>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 md:px-12 py-10 space-y-6 text-left">
                    {[
                        "Tem um tipo de técnico que aparece, resolve na aparência, some e dois meses depois o problema volta — diferente, mas igual.",
                        null, // separador de destaque
                        "A nossa reputação é construída chamada por chamada, conserto por conserto, cliente que indica para o vizinho porque confia no que foi feito.",
                        "Esse é o único marketing que a gente leva a sério.",
                    ].map((text, i) =>
                        text === null ? (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xl font-bold text-[#0B2046] py-2 border-t border-b border-gray-100"
                            >
                                A JAM não funciona assim.
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

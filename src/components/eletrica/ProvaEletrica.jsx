"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function ProvaEletrica() {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
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
                    className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-10 leading-tight"
                >
                    Não entregamos apenas documentos.{" "}
                    <span className="text-[#B07D46]">Entregamos tranquilidade.</span>
                </motion.h2>

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 md:px-12 py-10 space-y-6 text-left">
                    {[
                        "Existem profissionais que fazem medições rápidas, entregam um papel e desaparecem. Quando o cartório recusa a documentação ou o juiz solicita esclarecimentos técnicos, o cliente fica desamparado.",
                        null,
                        "Na Martins Engenharia, cada levantamento é realizado com rigor técnico e embasamento jurídico. Os laudos são elaborados para resistir a questionamentos em instâncias judiciais e atender às exigências dos cartórios de registro de imóveis.",
                        "Do primeiro contato à entrega final, você tem um engenheiro responsável acompanhando cada etapa — com ART assinada e suporte técnico sempre que precisar.",
                    ].map((text, i) =>
                        text === null ? (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-xl font-bold text-[#1B4332] py-2 border-t border-b border-gray-100"
                            >
                                A Martins Engenharia não funciona assim.
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

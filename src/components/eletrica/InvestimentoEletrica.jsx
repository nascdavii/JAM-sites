"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ to, suffix, prefix = "" }) {
    const [value, setValue] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!inView) return;
        const controls = animate(0, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (latest) => setValue(Math.floor(latest)),
        });
        return controls.stop;
    }, [inView, to]);

    return (
        <span ref={ref}>
            {prefix}{value}{suffix}
        </span>
    );
}

export default function InvestimentoEletrica() {
    return (
        <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#1B4332] text-white relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-[700px] h-[700px] bg-[#B07D46]/8 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center mb-8"
                >
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/25 px-4 py-1.5 rounded-full">
                        Dados que importam
                    </span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-3xl md:text-5xl font-bold text-white text-center mb-6 leading-tight"
                >
                    Regularização não é custo.{" "}
                    <span className="text-[#B07D46]">
                        É proteção patrimonial.
                    </span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-center text-lg text-gray-300 leading-[1.85] mb-16 max-w-2xl mx-auto"
                >
                    Imóveis regularizados têm maior valor de mercado, acesso a financiamentos e segurança jurídica para qualquer tipo de transação ou sucessão.
                </motion.p>

                {/* Números grandes */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            to: 60,
                            suffix: "%",
                            label: "das propriedades rurais têm inconsistência cadastral",
                            delay: 0.3,
                        },
                        {
                            to: 30,
                            suffix: "%",
                            label: "de valorização média após regularização completa",
                            delay: 0.45,
                        },
                        {
                            to: 100,
                            suffix: "%",
                            label: "dos laudos aceitos em instâncias judiciais",
                            delay: 0.6,
                        },
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: item.delay }}
                            className="bg-white/5 border border-white/10 rounded-2xl px-8 py-10 text-center backdrop-blur-sm"
                        >
                            <p className="text-6xl md:text-7xl font-bold text-[#B07D46] mb-3">
                                <Counter to={item.to} suffix={item.suffix} />
                            </p>
                            <p className="text-gray-300 text-lg">{item.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

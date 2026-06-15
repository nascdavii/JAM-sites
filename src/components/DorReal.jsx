"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const contentMap = {
    refrigeracao: {
        title: "Você já sabe como isso termina quando deixa pra depois.",
        paragraphs: [
            <>A geladeira começou a fazer barulho ou parou de gelar embaixo. Você achou que ia passar. <strong className="text-[#0B2046]">Não passou.</strong></>,
            <>A comida da semana está em risco, a água está quente e o técnico que você chamou não atende o telefone.</>,
            <>Não é descuido. É que a gente só lembra do problema quando ele já virou <strong className="text-[#0B2046]">prejuízo.</strong></>
        ]
    },
    climatizacao: {
        title: "O calor não avisa quando vai chegar.",
        paragraphs: [
            <>O ar-condicionado começa a pingar, fazer um barulho estranho ou simplesmente para de gelar no dia mais quente do mês. <strong className="text-[#0B2046]">É sempre assim.</strong></>,
            <>Você tenta limpar o filtro, muda a temperatura no controle, mas nada resolve. O ambiente vira uma estufa e o desconforto toma conta.</>,
            <>Não espere o equipamento pifar de vez. Pequenos defeitos, quando ignorados, viram <strong className="text-[#0B2046]">consertos caros.</strong></>
        ]
    }
};

// Zebra: Seção 1 → Cinza Gelo (#F4F5F7)
export default function DorReal({ variant = "refrigeracao" }) {
    const content = contentMap[variant] || contentMap.refrigeracao;

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-red-100 text-red-500 rounded-2xl mb-8">
                        <AlertTriangle className="h-7 w-7" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] mb-12 leading-tight">
                        {content.title}
                    </h2>
                </motion.div>

                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8 md:px-14 py-10 text-left space-y-6">
                    {content.paragraphs.map((text, i) => (
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

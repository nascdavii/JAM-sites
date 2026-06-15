"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle } from "lucide-react";

const contentMap = {
    refrigeracao: {
        title: "Consertar não é gasto.",
        highlight: "É o contrário de perder.",
        card1: {
            title: "O Prejuízo da Espera",
            desc: <>Uma geladeira parada por 48 horas pode custar <strong>mais em alimentos estragados</strong> do que o valor inteiro do conserto.</>
        },
        card2: {
            title: "A Economia Real",
            desc: <>Uma máquina de lavar vazando ou um freezer com defeito gastam o dobro de energia. O conserto se paga na <strong>próxima conta de luz.</strong></>
        },
        conclusion: "O problema nunca é o conserto.",
        conclusionHighlight: "O problema é esperar até não ter mais escolha."
    },
    climatizacao: {
        title: "Manutenção não é luxo.",
        highlight: "É saúde e economia.",
        card1: {
            title: "O Risco Invisível",
            desc: <>Um ar-condicionado sem higienização joga <strong>ácaros, fungos e bactérias</strong> direto no ar que sua família respira todos os dias.</>
        },
        card2: {
            title: "O Conforto Devolvido",
            desc: <>Um aparelho limpo e com o gás correto gela mais rápido, gasta menos energia e <strong>devolve o conforto</strong> das suas noites de sono.</>
        },
        conclusion: "A escolha é simples: agendar uma revisão agora ou",
        conclusionHighlight: "pagar o triplo quando a máquina travar no pico do verão."
    }
};

// Zebra: Seção 2 → Branco (#FFFFFF)
export default function ViradaPerspectiva({ variant = "refrigeracao" }) {
    const content = contentMap[variant] || contentMap.refrigeracao;

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
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] leading-tight">
                        {content.title}{" "}
                        <span className="text-[#00A8E8]">{content.highlight}</span>
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
                            <h3 className="text-xl font-bold">{content.card1.title}</h3>
                        </div>
                        <p className="text-[#4A5568] leading-[1.85] text-[17px]">
                            {content.card1.desc}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-[#00A8E8]/5 border border-[#00A8E8]/20 p-8 rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-5 text-[#007EA7]">
                            <CheckCircle2 className="h-7 w-7 shrink-0" />
                            <h3 className="text-xl font-bold">{content.card2.title}</h3>
                        </div>
                        <p className="text-[#4A5568] leading-[1.85] text-[17px]">
                            {content.card2.desc}
                        </p>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-14 text-center text-xl md:text-2xl font-medium text-[#0B2046] leading-[1.7]"
                >
                    {content.conclusion}
                    <br />
                    <span className="underline decoration-red-400 decoration-[3px] underline-offset-4">
                        {content.conclusionHighlight}
                    </span>
                </motion.p>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { MessageSquare, RefreshCcw, Clock, ShieldCheck, FileText } from "lucide-react";

const contentMap = {
    refrigeracao: {
        cards: [
            { icon: <MessageSquare className="h-7 w-7 text-white" />, title: "Consultoria antes do serviço", desc: "A gente explica o problema antes de cobrar por ele." },
            { icon: <RefreshCcw className="h-7 w-7 text-white" />, title: "Empréstimo de aparelho", desc: "Enquanto o seu está sendo consertado, você não fica desamparado." },
            { icon: <Clock className="h-7 w-7 text-white" />, title: "Atendimento rápido", desc: "Porque cada hora sem refrigeração tem um custo real para você." },
            { icon: <ShieldCheck className="h-7 w-7 text-white" />, title: "Garantia no serviço", desc: "Não é promessa. É compromisso assinado com o resultado." },
            { icon: <FileText className="h-7 w-7 text-white" />, title: "Transparência no orçamento", desc: "O preço que você ouviu é o preço que você paga. Sempre." },
        ]
    },
    climatizacao: {
        cards: [
            { icon: <MessageSquare className="h-7 w-7 text-white" />, title: "Avaliação Técnica Precisa", desc: "Avaliamos a capacidade térmica correta antes de instalar ou consertar." },
            { icon: <RefreshCcw className="h-7 w-7 text-white" />, title: "Limpeza Sustentável", desc: "Usamos produtos certificados que não agridem a serpentina do aparelho." },
            { icon: <Clock className="h-7 w-7 text-white" />, title: "Atendimento Rápido", desc: "Para que você não perca noites de sono esperando o conserto." },
            { icon: <ShieldCheck className="h-7 w-7 text-white" />, title: "Garantia Real", desc: "Nosso trabalho é documentado e tem garantia real de funcionamento." },
            { icon: <FileText className="h-7 w-7 text-white" />, title: "Orçamento sem surpresas", desc: "O preço que você ouviu é o preço que você paga. Sem taxas ocultas." },
        ]
    }
};

// Zebra: Seção 4 → Branco (#FFFFFF)
export default function Diferenciais({ variant = "refrigeracao" }) {
    const cards = contentMap[variant]?.cards || contentMap.refrigeracao.cards;

    return (
        <section id="diferenciais" className="py-24 px-4 sm:px-6 lg:px-8 bg-white scroll-mt-20">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] mb-4">
                        O que muda quando você chama a JAM
                    </h2>
                    <div className="w-20 h-1 bg-[#00A8E8] mx-auto rounded-full" />
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
                    {cards.map((card, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300 group"
                        >
                            {/* Ícone com fundo Ciano */}
                            <div className="w-14 h-14 bg-[#00A8E8] rounded-xl flex items-center justify-center mb-6 shadow-md group-hover:bg-[#007EA7] transition-colors duration-300">
                                {card.icon}
                            </div>
                            <h3 className="text-[17px] font-bold text-[#0B2046] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[#4A5568] leading-[1.85] text-[15px]">
                                {card.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

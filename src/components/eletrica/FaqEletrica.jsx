"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        q: "O que é o levantamento planialtimétrico e para que serve?",
        a: "É um estudo técnico detalhado que mapeia com precisão os limites, relevo, confrontações, benfeitorias, cursos d'água e acessos de uma propriedade. Ele é a base para qualquer processo de regularização fundiária, retificação de área, desmembramento ou perícia judicial.",
    },
    {
        q: "Qual a diferença entre levantamento topográfico e georreferenciamento?",
        a: "O levantamento topográfico mapeia as características físicas do terreno (relevo, limites, construções). O georreferenciamento vai além: vincula essas informações ao sistema de coordenadas oficial do país (SIRGAS 2000), sendo obrigatório para propriedades rurais acima de determinada área. Na Martins, realizamos ambos com equipamentos de alta precisão.",
    },
    {
        q: "Meu imóvel rural precisa de georreferenciamento?",
        a: "Sim. A Lei 10.267/2001 exige o georreferenciamento de imóveis rurais para qualquer transação de compra, venda, desmembramento ou financiamento. Os prazos de obrigatoriedade variam conforme o tamanho da propriedade, e muitos já estão em vigor. Sem ele, o cartório pode recusar a averbação.",
    },
    {
        q: "O laudo da Martins é aceito em processos judiciais?",
        a: "Sim. Todos os nossos laudos são elaborados com rigor técnico e fundamentação legal, assinados por engenheiro civil habilitado como perito judicial. São aceitos em varas cíveis, juizados e instâncias superiores como prova técnica fundamentada.",
    },
    {
        q: "Quanto tempo leva o processo completo de regularização?",
        a: "O levantamento de campo leva de 1 a 5 dias, dependendo da complexidade e tamanho da propriedade. A elaboração do laudo e planta técnica leva de 7 a 15 dias úteis. O processo cartorário pode variar de 30 a 90 dias, e acompanhamos cada etapa junto ao cartório por você.",
    },
    {
        q: "Vocês atendem fora de Salvador?",
        a: "Sim. Atendemos toda a Região Metropolitana de Salvador e realizamos levantamentos em propriedades rurais em diversas regiões da Bahia, mediante agendamento prévio. Entre em contato para verificar disponibilidade para a sua localidade.",
    },
];

function FaqItem({ faq, isOpen, onToggle }) {
    return (
        <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.04)]">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-7 py-5 text-left"
                aria-expanded={isOpen}
            >
                <span className="font-semibold text-[#1B4332] text-[16px] pr-4">
                    {faq.q}
                </span>
                <ChevronDown
                    className={`h-5 w-5 text-[#B07D46] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="px-7 pb-6 text-[#4A5568] text-[15px] leading-[1.85]">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function FaqEletrica() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1B4332] mb-4">
                        Perguntas frequentes
                    </h2>
                    <div className="w-20 h-1 bg-[#B07D46] mx-auto rounded-full" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="space-y-3"
                >
                    {faqs.map((faq, i) => (
                        <FaqItem
                            key={i}
                            faq={faq}
                            isOpen={openIndex === i}
                            onToggle={() => toggle(i)}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

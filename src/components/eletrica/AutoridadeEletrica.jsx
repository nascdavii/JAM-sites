"use client";

import { motion } from "framer-motion";
import { GraduationCap, FileCheck, ShieldCheck } from "lucide-react";

// Zebra: Seção 3 → Cinza Gelo (#F4F5F7)
export default function AutoridadeEletrica() {
    const points = [
        {
            icon: <GraduationCap className="h-6 w-6 text-[#B07D46]" />,
            title: "Projeto assinado por engenheiro",
            desc: "Toda instalação solar e elétrica sai com ART — Anotação de Responsabilidade Técnica. Você tem um engenheiro registrado no CREA respondendo pelo que foi feito.",
        },
        {
            icon: <FileCheck className="h-6 w-6 text-[#B07D46]" />,
            title: "Homologação junto à concessionária",
            desc: "Cuidamos de todo o processo de aprovação com a distribuidora de energia. Da documentação à conexão — sem dor de cabeça para você.",
        },
        {
            icon: <ShieldCheck className="h-6 w-6 text-[#B07D46]" />,
            title: "Instalação dentro das normas",
            desc: "Conformidade com as normas ABNT NBR vigentes. Sem improvisação, sem risco de invalidar o seguro do imóvel ou a garantia dos equipamentos.",
        },
    ];

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] mb-4 leading-tight">
                        Qualquer um instala painel solar. Nem todos fazem certo.
                    </h2>
                    <p className="text-xl text-[#B07D46] font-semibold mb-8">
                        A diferença está no projeto e em quem assina embaixo.
                    </p>
                    <div className="space-y-5 text-lg text-[#4A5568] leading-[1.85]">
                        <p>
                            A Martins Engenharia é conduzida por Engenheiro Civil com
                            registro no CREA, Técnico em Eletrotécnica e habilitação como
                            Perito Judicial. Cada projeto dimensionado para a sua realidade
                            — não um sistema genérico copiado de outra obra.
                        </p>
                        <p className="font-medium text-[#1B4332]">
                            Você merece saber quantos painéis precisa, qual o retorno real
                            do investimento e quando começa a economizar — antes de gastar
                            um centavo.
                        </p>
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="grid gap-5">
                    {points.map((point, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15 }}
                            className="bg-white border border-gray-100 p-6 rounded-2xl flex items-start gap-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:-translate-y-0.5 transition-transform duration-300"
                        >
                            <div className="w-12 h-12 bg-[#B07D46]/10 rounded-xl flex items-center justify-center shrink-0">
                                {point.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#1B4332] mb-1.5">
                                    {point.title}
                                </h3>
                                <p className="text-[#4A5568] leading-[1.8] text-[15px]">
                                    {point.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

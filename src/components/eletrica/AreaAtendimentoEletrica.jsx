"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const regioes = [
    "Salvador, BA",
    "Região Metropolitana (BA)",
    "Interior da Bahia",
    "Maceió, AL",
    "Região Metropolitana (AL)",
    "Interior de Alagoas",
];

export default function AreaAtendimentoEletrica() {
    return (
        <section id="area" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#B07D46] bg-[#B07D46]/10 border border-[#B07D46]/20 px-4 py-1.5 rounded-full mb-6">
                        Área de atendimento e Sede
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1B4332] mb-6 leading-tight">
                        Bahia e Alagoas
                    </h2>
                    <p className="text-lg text-[#4A5568] leading-[1.85] mb-6">
                        Realizamos serviços de engenharia, perícia e agrimensura em toda Salvador e Região, bem como no estado de Alagoas. Nossa equipe está estruturada para atender propriedades urbanas e rurais em ambas as localidades.
                    </p>

                    <div className="bg-[#F4F5F7] p-5 rounded-xl border border-gray-100 mb-8">
                        <p className="font-semibold text-[#1B4332] mb-1">Nosso Endereço:</p>
                        <p className="text-sm text-gray-600">
                            Loteamento Recanto de Itapuã, Rua Roma, Número 225A<br />
                            Bairro: Itapuã | CEP 41630-146<br />
                            Salvador - BA
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {regioes.map((regiao, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center gap-2 text-[#4A5568] text-sm font-medium"
                            >
                                <MapPin className="h-4 w-4 text-[#B07D46] shrink-0" />
                                {regiao}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Mapa */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 h-[400px] relative group cursor-pointer"
                >
                    <a
                        href="https://share.google/0RLBdWUPTlAzH91R5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"
                        title="Ver perfil da empresa no Google"
                        aria-label="Ver perfil da empresa no Google"
                    >
                        <span className="sr-only">Acessar Perfil do Google da Empresa</span>
                    </a>
                    <iframe
                        title="Sede Martins Engenharia — Itapuã, Salvador, BA"
                        src="https://maps.google.com/maps?q=Rua+Roma,+225A+-+Itapuã,+Salvador+-+BA,+41630-146&t=&z=14&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, pointerEvents: "none" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Mapa mostrando a sede em Itapuã, Salvador"
                    />
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";

const cidades = [
    "Salvador",
    "Lauro de Freitas",
    "Camaçari",
    "Simões Filho",
    "Candeias",
];

export default function AreaAtendimento() {
    return (
        <section id="area" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F4F5F7]">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                {/* Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#00A8E8] bg-[#00A8E8]/10 border border-[#00A8E8]/20 px-4 py-1.5 rounded-full mb-6">
                        Área de atendimento
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] mb-6 leading-tight">
                        Salvador e Região Metropolitana
                    </h2>
                    <p className="text-lg text-[#4A5568] leading-[1.85] mb-8">
                        Atendemos com rapidez em toda Salvador e cidades vizinhas.
                        Nossas equipes são distribuídas estrategicamente para chegar mais rápido
                        quando você mais precisa.
                    </p>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                        {cidades.map((cidade, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.06 }}
                                className="flex items-center gap-2 text-[#4A5568] text-sm"
                            >
                                <MapPin className="h-4 w-4 text-[#00A8E8] shrink-0" />
                                {cidade}
                            </motion.div>
                        ))}
                    </div>

                    <a
                        href="https://maps.google.com/?q=Salvador,BA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#00A8E8] hover:text-[#007EA7] transition-colors"
                    >
                        Ver perfil da empresa no Google Maps
                        <ExternalLink className="h-4 w-4" />
                    </a>
                </motion.div>

                {/* Mapa */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100 h-[400px]"
                >
                    <iframe
                        title="Área de atendimento JAM Refrigeração"
                        src="https://maps.google.com/maps?q=Salvador,BA,Brazil&t=&z=11&ie=UTF8&iwloc=&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        aria-label="Mapa mostrando a área de atendimento em Salvador e região metropolitana"
                    />
                </motion.div>
            </div>
        </section>
    );
}

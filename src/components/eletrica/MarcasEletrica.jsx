"use client";

import { motion } from "framer-motion";

const brands = [
    "Canadian Solar",
    "JinkoSolar",
    "Growatt",
    "Deye",
    "WEG",
    "Intelbras",
    "Trina Solar",
];

function BrandPill({ name }) {
    return (
        <div className="flex items-center justify-center px-8 shrink-0">
            <span className="text-gray-400 font-bold text-sm uppercase tracking-widest whitespace-nowrap">
                {name}
            </span>
        </div>
    );
}

export default function MarcasEletrica() {
    return (
        <section className="py-10 bg-white border-t border-b border-gray-100">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6"
            >
                Equipamentos das principais marcas do mercado
            </motion.p>

            {/* Marquee wrapper */}
            <div className="overflow-hidden animate-marquee-pause">
                <div className="flex animate-marquee" style={{ width: "max-content" }}>
                    {/* Duplicate list for seamless loop */}
                    {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                        <BrandPill key={i} name={brand} />
                    ))}
                </div>
            </div>
        </section>
    );
}

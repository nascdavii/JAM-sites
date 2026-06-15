"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/app/page";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0B2046]/95 backdrop-blur-sm shadow-lg py-3"
                    : "bg-transparent py-5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="#" className="flex items-center">
                    <img
                        src="https://i.imgur.com/J3ZAuv4.png"
                        alt="JAM Refrigeração e Climatização"
                        className="h-10 md:h-12 w-auto object-contain"
                    />
                </a>

                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300 items-center">
                    <a href="#diferenciais" className="hover:text-white transition-colors">
                        Diferenciais
                    </a>
                    <a href="#sobre" className="hover:text-white transition-colors">
                        Sobre Nós
                    </a>
                    <a href="#depoimentos" className="hover:text-white transition-colors">
                        Depoimentos
                    </a>
                    <a href="/martins.eng" className="hover:text-[#00A8E8] text-white font-bold transition-colors">
                        Energia Solar & Elétrica
                    </a>
                </nav>

                <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-300"
                >
                    <img src="https://i.imgur.com/VCgWVbX.png" alt="WhatsApp" className="h-5 w-5 object-contain" />
                    <span>Orçamento Grátis</span>
                </a>
            </div>
        </header>
    );
}

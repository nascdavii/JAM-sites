"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";

export default function HeaderEletrica() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
                scrolled
                    ? "shadow-md py-2"
                    : "py-4 border-b border-gray-100"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <a href="#" className="flex items-center py-2">
                    <img
                        src="https://i.imgur.com/djJwRJL.png"
                        alt="Martins Engenharia"
                        className="h-16 md:h-20 w-auto object-contain mix-blend-multiply"
                    />
                </a>

                <nav className="hidden md:flex gap-8 text-sm font-semibold text-gray-700">
                    <a href="#servicos" className="hover:text-[#B07D46] transition-colors">
                        Serviços
                    </a>
                    <a href="#engenheiro" className="hover:text-[#B07D46] transition-colors">
                        Engenheiro
                    </a>
                    <a href="#area" className="hover:text-[#B07D46] transition-colors">
                        Área
                    </a>
                    <a href="#faq" className="hover:text-[#B07D46] transition-colors">
                        FAQ
                    </a>
                </nav>

                <a
                    href={WHATSAPP_LINK_ELETRICA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-green-600 rounded-lg hover:bg-green-700 hover:-translate-y-0.5 transition-all duration-300 shadow-md"
                >
                    <img src="https://i.imgur.com/VCgWVbX.png" alt="WhatsApp" className="h-7 w-7 object-contain" />
                    <span className="hidden sm:inline">WhatsApp</span>
                </a>
            </div>
        </header>
    );
}

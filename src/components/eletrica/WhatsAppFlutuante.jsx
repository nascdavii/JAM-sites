"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_ELETRICA } from "@/app/martins.eng/constants";

export default function WhatsAppFlutuante() {
    return (
        <motion.a
            href={WHATSAPP_LINK_ELETRICA}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Martins Engenharia no WhatsApp"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-[0_4px_20px_rgba(34,197,94,0.5)] hover:bg-green-600 transition-colors duration-300"
        >
            <img src="https://i.imgur.com/VCgWVbX.png" alt="WhatsApp" className="h-8 w-8 object-contain drop-shadow-md" />
        </motion.a>
    );
}

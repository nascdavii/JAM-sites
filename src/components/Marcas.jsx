"use client";

const marcas = [
    { src: "https://i.imgur.com/4x4ioX9.png", alt: "Marca 1" },
    { src: "https://i.imgur.com/S4U4kcv.png", alt: "Marca 2" },
    { src: "https://i.imgur.com/DZGlHzh.png", alt: "Marca 3" },
    { src: "https://i.imgur.com/MJtHzmD.png", alt: "Marca 4" },
    { src: "https://i.imgur.com/j3bCTBv.png", alt: "Marca 5" },
    { src: "https://i.imgur.com/dVzFJjT.png", alt: "Marca 6" },
    { src: "https://i.imgur.com/J9oRhy7.png", alt: "Marca 7" },
    { src: "https://i.imgur.com/opjV2Hq.png", alt: "Marca 8" },
];

export default function Marcas() {
    return (
        <section className="py-12 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
                    Marcas que somos especialistas
                </p>
            </div>

            <div className="relative flex overflow-x-hidden animate-marquee-pause group">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-12 sm:gap-20 w-max pl-12 sm:pl-20">
                    {[...marcas, ...marcas].map((marca, index) => (
                        <img
                            key={`marca-${index}`}
                            src={marca.src}
                            alt={marca.alt}
                            className="h-10 sm:h-12 w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

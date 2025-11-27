import type {Language} from "@/data/translations";
import {translations} from "@/data/translations";

interface HeroProps {
    lang: Language;
}

const Hero : React.FC<HeroProps> = ({lang}) => {
    const t = translations[lang];

    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
            <img
                src="logo.png"
                alt="StarOwl Logo"
                className="w-60 h-60 opacity-90 mb-6 rounded-full"
            />

            <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {t.mainTitle}
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-8">
                {t.mainDesc}
            </p>

            <p className="text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
                {t.description}
            </p>
        </section>
    );
};

export default Hero;

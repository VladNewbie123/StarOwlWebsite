import type {Language} from "@/data/translations";
import {translations} from "@/data/translations";

interface WhyStarOwlProps {
    lang: Language;
}

const WhyStarOwl : React.FC<WhyStarOwlProps> = ({lang}) => {
    const t = translations[lang];
    return (
        <section className="max-w-4xl mx-auto py-20 px-6 text-center text-gray-300">
            <h3 className="text-3xl font-bold text-white mb-8">
                {t.whyStarOwl}
            </h3>

            <p className="leading-relaxed text-lg">
                {t.whyDesc}
            </p>
        </section>
    );
};

export default WhyStarOwl;

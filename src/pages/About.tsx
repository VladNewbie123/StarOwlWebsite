import React from "react";
import {Language, translations} from "@/data/translations";

interface AboutProps {
    lang: Language;
}

const About: React.FC<AboutProps> = ({lang}) => {
    const t = translations[lang]
    return (
        <section className="min-h-screen pt-24 px-4 max-w-4xl mx-auto">

            {/* Заголовок */}
            <h2 className="text-4xl font-bold text-center mb-8 mt-8">
                {t.aboutTitle}
            </h2>

            {/* Описание */}
            <p className="text-gray-300 text-lg leading-relaxed mb-10 text-center">
                {t.aboutDes}
            </p>

            {/* Блок с 3 секциями */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

                {/* 3D */}
                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold mb-3">{t.aboutText3dTitle}</h3>
                    <p className="text-gray-400 text-sm">{t.aboutText3d}</p>
                </div>

                {/* Web */}
                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold mb-3">{t.aboutTextWebTitle}</h3>
                    <p className="text-gray-400 text-sm">{t.aboutTextWeb}</p>
                </div>

                {/* Programming */}
                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-6 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h3 className="text-xl font-semibold mb-3">{t.aboutTextCodTitle}</h3>
                    <p className="text-gray-400 text-sm">{t.aboutTextCod}</p>
                </div>
            </div>

            {/* Дополнительный текст */}
            <p className="text-gray-400 text-center max-w-3xl mx-auto leading-relaxed mb-20">
                {t.additionalText}
            </p>

        </section>
    );
};

export default About;

import React from "react";
import {Language, translations} from "@/data/translations";

interface FreelanceProps {
    lang: Language;
}

const Freelance: React.FC<FreelanceProps> = ({lang}) => {
    const t = translations[lang]
    return (
        <section className="min-h-screen pt-24 px-4">

            {/* ====================== */}
            {/*        ФРИЛАНС         */}
            {/* ====================== */}
            <h2 className="text-4xl font-bold text-center mb-6">
                {t.freelancePageTitle}
            </h2>

            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                {t.freelancePageDesc}
            </p>

            {/* Услуги */}
            <h3 className="text-2xl font-semibold mb-6 text-center">{t.freelanceServices}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h4 className="text-xl font-bold mb-3">{t.freelance3d}</h4>
                    <p className="text-gray-400">
                        {t.freelance3dDesc}
                    </p>
                </div>

                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h4 className="text-xl font-bold mb-3">{t.freelanceWeb}</h4>
                    <p className="text-gray-400">
                        {t.freelanceWebDesc}
                    </p>
                </div>

                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-5 hover:shadow-lg hover:shadow-blue-500/10 transition">
                    <h4 className="text-xl font-bold mb-3">{t.freelanceProg}</h4>
                    <p className="text-gray-400">
                        {t.freelanceProgDesc}
                    </p>
                </div>
            </div>

            {/* Кнопка на платформу фриланса */}
            <div className="text-center mb-20">
                <a
                    href="https://www.fiverr.com/starowl_3d?source=gig_page"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                    {t.freelanceProfileBtn}
                </a>
            </div>

            {/* ====================== */}
            {/*    ПРОДАЖ 3D-МОДЕЛЕЙ   */}
            {/* ====================== */}

            <h2 className="text-4xl font-bold text-center mb-6">
                {t.salesTitle}
            </h2>

            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
                {t.salesDesc}
            </p>

            {/* Блок преимущества */}
            <h3 className="text-2xl font-semibold mb-6 text-center">{t.salesBlockTitle}</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-5">
                    <h4 className="text-xl font-bold mb-3">{t.salesGameModels}</h4>
                    <p className="text-gray-400">{t.salesGameModelsDesc}</p>
                </div>

                <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-5">
                    <h4 className="text-xl font-bold mb-3">{t.salesPBR}</h4>
                    <p className="text-gray-400">{t.salesPBRDesc}</p>
                </div>

            </div>

            {/* Кнопка на магазин моделей */}
            <div className="text-center mb-20">
                <a
                    href="https://www.cgtrader.com/designers/starowl3d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition"
                >
                    {t.salesShopBtn}
                </a>
            </div>

        </section>
    );
};

export default Freelance;

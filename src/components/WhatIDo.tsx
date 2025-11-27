import {Language, translations} from "@/data/translations";

interface WhatIDoProps {
    lang: Language;
}

const WhatIDo : React.FC<WhatIDoProps> = ({lang}) => {
    const t = translations[lang];
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h3 className="text-3xl font-bold text-center mb-10">
                {t.whatIDo}
            </h3>

            <div className="grid md:grid-cols-3 gap-10">
                <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold mb-3">
                        {t.modeling}
                    </h4>
                    <p className="text-gray-300">
                        {t.modelingDesc}
                    </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold mb-3">
                        {t.webDev}
                    </h4>
                    <p className="text-gray-300">
                        {t.webDevDesc}
                    </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 shadow-lg">
                    <h4 className="text-xl font-semibold mb-3">
                        {t.webDevDesc}
                    </h4>
                    <p className="text-gray-300">
                        {t.freelanceDesc}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;

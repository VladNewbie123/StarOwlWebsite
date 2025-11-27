import React from "react";
import type {Language} from "@/data/translations";
import {translations} from "@/data/translations";

interface BlogProps {
    lang: Language;
}

const Blog: React.FC<BlogProps> = ({lang}) => {
    const t = translations[lang]
    return (
        <section className="min-h-screen pt-24 px-4 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-6 mt-8">{t.blogTitle}</h2>

            <p className="text-gray-300 max-w-xl mb-10">{t.blogText}</p>

            <div className="bg-[#0f1a2b] border border-gray-700 rounded-2xl p-6 max-w-md">
                <p className="text-gray-400">{t.blogMessage}</p>
            </div>
        </section>
    );
};

export default Blog;

import { useState } from "react";
import { projects} from "@/data/projectsList";
import type {Language} from "@/data/translations";
import {translations} from "@/data/translations";

const categories = ["all", "3d", "book", "code"];
interface projectProps {
    lang: Language;
}

const Projects: React.FC<projectProps> = ({lang}) => {
    const t = translations[lang]
    const [activeCategory, setActiveCategory] = useState("all");

    // Фильтруем проекты по выбранной категории
    const filteredProjects =
        activeCategory === "all"
            ? projects
            : projects.filter((p) => p.category === activeCategory);

    return (
        <section className="min-h-screen pt-24 px-4">
            {/* Заголовок */}
            <h2 className="text-4xl font-bold text-center mb-6">{t.projectsTitle}</h2>
            <p className="text-gray-300 text-center max-w-2xl mx-auto mb-10">{t.projectsSubtitle}</p>

            {/* Фильтр */}
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-5 py-2 rounded-xl border transition
              ${
                            activeCategory === cat
                                ? "bg-white text-black"
                                : "border-gray-500 text-gray-300 hover:text-white"
                        }`}
                    >
                        {cat === "all" && t.categoryAll}
                        {cat === "3d" && t.category3d}
                        {cat === "book" && t.categoryBook}
                        {cat === "code" && t.categoryCode}
                    </button>
                ))}
            </div>

            {/* Сетка проектов */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {filteredProjects.map((p) => (
                    <div
                        key={p.id}
                        className="group bg-[#0f1a2b] border border-gray-700 rounded-2xl p-4
                       hover:shadow-lg hover:shadow-blue-500/10 transition overflow-hidden"
                    >
                        <img
                            src={p.image}
                            alt={p.title}
                            className="rounded-xl mb-4 h-20"
                        />

                        <h3 className="text-xl font-semibold mb-2">{p.title}</h3>

                        <p
                            className="
                    text-gray-400 text-sm
                    max-h-10 overflow-hidden transition-all duration-300
                    group-hover:max-h-96
                "
                        >
                            {p.description}
                        </p>
                    </div>
                ))}
            </div>


        </section>
    );
};

export default Projects;



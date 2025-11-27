import {Language, translations} from "@/data/translations";

interface ProjectsProps {
    lang: Language;
}


const Projects: React.FC<ProjectsProps> = ({lang}) => {
    const t = translations[lang];
    return (
        <section className="max-w-6xl mx-auto py-20 px-6">
            <h3 className="text-3xl font-bold text-center mb-10">
                {t.bestProjects}
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="relative h-48 rounded-xl overflow-hidden group">
                    <img src="CactuarCup1.jpg" className="w-full h-full object-cover"/>
                    <div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4 text-center text-white">
                        <p>{t.desproj1}</p>
                    </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden group">
                    <img src="mango_render_02.png" className="w-full h-full object-cover"/>
                    <div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4 text-center text-white">
                        <p>{t.desproj2}</p>
                    </div>
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden group">
                    <img src="cup1_1.png" className="w-full h-full object-cover"/>
                    <div
                        className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-4 text-center text-white">
                        <p>{t.desproj3}</p>
                    </div>
                </div>
            </div>

            <div className="text-center mt-10">
                <a href="https://www.artstation.com/starowl3d6" target="_blank" rel="noopener noreferrer"
                   className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">{t.buttonProjects}</a>
            </div>

        </section>
    );
};

export default Projects;

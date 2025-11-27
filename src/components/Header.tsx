import {useState} from "react";
import {Language, translations} from "@/data/translations";
import {Link} from "react-router-dom";

interface HeaderProps {
    lang: Language;
    setLang: (lang: Language) => void;
}

const Header: React.FC<HeaderProps> = ({lang, setLang}) => {
    const t = translations[lang];
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header
            className="fixed top-0 left-0 w-full bg-[#0d1a2d]/80 backdrop-blur-xl z-50 shadow-lg border-b border-white/10">
            <nav className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">

                {/* Logo */}
                <h1 className="flex items-center space-x-2 text-xl sm:text-2xl font-extrabold text-white tracking-wide drop-shadow-lg cursor-pointer">
                    <img
                        src="logo1.png"
                        alt="Logo"
                        className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                    />
                    <span>StarOwl</span>
                </h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex space-x-6 text-base lg:text-lg">
                    <li><Link to="/" className="nav-link cursor-pointer">{t.home}</Link></li>
                    <li><Link to="/projectpage" className="nav-link cursor-pointer">{t.projects}</Link></li>
                    <li><Link to="/freelance" className="nav-link cursor-pointer">{t.freelance}</Link></li>
                    <li><Link to="/blog" className="nav-link cursor-pointer">{t.blog}</Link></li>
                    <li><Link to="/about" className="nav-link cursor-pointer">{t.about}</Link></li>
                </ul>

                {/* Language + Burger */}
                <div className="flex items-center space-x-2">

                    {/* Language switcher */}
                    <button
                        onClick={() => setLang("uk")}
                        className={`lang-btn cursor-pointer text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 ${lang === "uk" ? "lang-active" : ""}`}
                    >
                        UK
                    </button>

                    <button
                        onClick={() => setLang("en")}
                        className={`lang-btn cursor-pointer text-sm sm:text-base px-2 py-1 sm:px-3 sm:py-1.5 ${lang === "en" ? "lang-active" : ""}`}
                    >
                        EN
                    </button>

                    {/* Burger button (animated) */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer "
                        onClick={() => setMenuOpen(!menuOpen)}>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`}/>
                        <span
                            className={`w-6 h-0.5 bg-white my-1 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}/>
                        <span
                            className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}/>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden 
                ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
            >
                <div className="bg-[#0d1a2d]/95 px-6 pb-4 pt-4 space-y-3 border-t border-white/10">

                    <a href="#"
                       className="block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition font-medium">
                        {t.home}
                    </a>

                    <a href="#projects"
                       className="block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition font-medium">
                        {t.projects}
                    </a>

                    <a href="#freelance"
                       className="block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition font-medium">
                        {t.freelance}
                    </a>

                    <a href="#blog"
                       className="block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition font-medium">
                        {t.blog}
                    </a>

                    <a href="#about"
                       className="block bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition font-medium">
                        {t.about}
                    </a>

                </div>
            </div>
        </header>
    );
};

export default Header;

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer"
import type { Language } from "@/data/translations";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import {Routes, Route} from "react-router-dom";
import Freelance from "@/pages/Freelance";
import Blog from "@/pages/Blog";
import About from "@/pages/About";

function App() {
    const [lang, setLang] = useState<Language>("en"); // начальный язык

    return (
        <div className="App">
            <Header lang={lang} setLang={setLang} />
            <Routes>
                <Route path="/" element={<Home lang={lang}/>} />
                <Route path="/projectpage" element={<Projects lang={lang}/>} />
                <Route path="/freelance" element={<Freelance lang={lang}/>} />
                <Route path="/blog" element={<Blog lang={lang}/>} />
                <Route path="/about" element={<About lang={lang}/>} />
            </Routes>
            <Footer lang={lang}/>
        </div>
    );
}

export default App;

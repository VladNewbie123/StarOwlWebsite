import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import WhyStarOwl from "@/components/WhyStarOwl";
import type { Language } from "@/data/translations";

interface HomeProps {
    lang: Language;
}

const Home = ({ lang }: HomeProps) => {
    return (
        <>
            <Hero lang={lang} />
            <WhatIDo lang={lang} />
            <Projects lang={lang} />
            <WhyStarOwl lang={lang} />
        </>
    );
};

export default Home;

import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Projects from "@/components/Projects";
import WhyStarOwl from "@/components/WhyStarOwl";

const Home = ({ lang }: { lang: string }) => {
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

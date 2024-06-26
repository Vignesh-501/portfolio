import React, { useEffect, useState } from "react";

import './MainPage.css'

import HeroSection from "../HeroSection/HeroSection";
import AboutSection from "../AboutSection/AboutSection";
import EducationSection from "../EducationSection/EducationSection";
import ProjectSection from "../ProjectSection/ProjectSection";
import ContactSection from "../ContactSection/ContactSection";
import Footer from "../../Components/Footer/Footer";
import FAB from "../../Components/FAB/FAB";

export default function MainPage({stars}) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const s = (e) => {
            if(window.scrollY > window.innerHeight-100) {
                setIsScrolled(true)
            }else if(window.scrollY < window.innerHeight) {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', s);

        return () => {
            window.removeEventListener('scroll', s);
        }
    }, [])

    return(
        <div className="content-container">
            <HeroSection stars={stars}/>
            <AboutSection />
            <EducationSection />
            <ProjectSection />
            <ContactSection />
            <FAB isScrolled={isScrolled}/>
            <Footer />
        </div>
    )
}
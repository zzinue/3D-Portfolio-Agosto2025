import React from 'react'
import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx";
import LogoSection from "./sections/LogoSection.jsx";
import FeaturedCards from "./sections/FeaturedCards.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import TechStack from "./sections/TechStack.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import AppToast from "./components/AppToast.jsx";


const App = () => {
    return (
        <>
            <NavBar />
           <Hero/>
            <ExperienceSection/>
            <ShowcaseSection/>

            <LogoSection/>
            <FeaturedCards/>

            <TechStack/>
            {/*<Testimonials/>*/}
            <AppToast />
            <Contact/>
            <Footer/>
        </>
    )
}
export default App

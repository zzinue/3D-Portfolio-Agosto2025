import React from 'react'
import {words} from "../constants/index.js";
import Button from "../components/Button.jsx";
import HeroExperience from "../components/HeroModels/HeroExperience.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/HeroModels/AnimatedCounter.jsx";

const Hero = () => {
    //use of gsap
    useGSAP(()=>{
    gsap.fromTo('.hero-text h1',
        {
            y:50,
            opacity: 0,
        },{
        y:0,
            opacity: 1,
            stagger: 0.2,
            duration:1,
            ease:"power2.out",
        },
        )
})


    return (
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>

            <div className="hero-layout">
                {/*left part*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Creando
                                <span className="slide">
                            <span className="wrapper">
                                {words.map((word) => (
                                    <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                        <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50
                                        "/>
                                        <span> {word.text}</span>
                                    </span>
                                ))}
                            </span>
                                </span>
                            </h1>
                            <h1>En Proyectos Reales</h1>
                            <h1>Entrega de Resultados</h1>
                        </div>
                        <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">Soy Victor
                            Guerrero un desarrollador de México apasionado de la tecnología</p>
                        <Button
                            className="md:w-80 md:h-16 w-60 h-12"
                            id="button"
                            text="Trayectoria"
                        />
                    </div>
                </header>
                {/*right part*/}
                {/*<figure>*/}
                {/*    <div className="hero-3d-layout ">*/}
                {/*        <HeroExperience/>*/}
                {/*    </div>*/}
                {/*</figure>*/}

                <aside className="hero-photo">
                    <img
                        src="/images/perfil.png"
                        alt="Victor Guerrero, desarrollador web"
                        className="w-64 h-64 object-cover rounded-3xl"
                        style={{ objectPosition: "center 20%" }}
                    />

                </aside>
            </div>

            <AnimatedCounter/>
        </section>
    )
}
export default Hero

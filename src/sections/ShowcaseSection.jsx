import React, {useRef} from 'react'
import {gsap} from 'gsap'

import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useGSAP} from "@gsap/react";
import TitleHeader from "../components/TitleHeader.jsx";

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef=useRef(null)
    const project1Ref=useRef(null)
    const project2Ref=useRef(null)
    const project3Ref=useRef(null)


    useGSAP(()=>{
        const projects=[project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card,index)=>{

            gsap.fromTo(card,{
                    y:50,opacity:0
                },{
                    y:0, opacity:1, duration:1, delay:0.3 *(index+1), scrollTrigger:{
                        trigger:card, start:"top bottom-=100"
                    }
                }
            )

        })
        gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1, duration:1.5})
    },[])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>

            <div className='w-full'>
                <TitleHeader title='Mis Proyectos completados ' sub='🏢Proyectos Personales'/>
                <div className='showcaselayout mt-22 '>
                    {/*left*/}

                        <div className='first-project-wrapper' ref={project1Ref}>
                            <div className='image-wrapper'>
                                <a   target="_blank" href="https://lap-zone-frontend.vercel.app/">
                                    <img src='/images/lapzone.png' alt='Ryde'/>
                                </a>
                            </div>
                            <div className="text-content">
                                <h2>LapZone | E-commerce Full Stack de Tecnología</h2>
                                <p className="text-white-50 md:text-xl">
                                    Tienda en línea para venta de laptops y accesorios, con catálogo dinámico, carrito persistente, autenticación JWT, checkout, pagos con Stripe y panel administrativo. Desarrollada con React, Spring Boot y PostgreSQL.
                                </p>
                            </div>
                        </div>


                    {/*right*/}
                        <div className="project-list-wrapper overflow-hidden">
                            <div className="project" ref={project2Ref}>
                                <div className="image-wrapper bg-[#ffefdb]">
                                    <a   target="_blank" href="https://ecommerce-sanity-stripe-zzinue.vercel.app/">
                                        <img src="/images/sanitycommerce.png" alt="Library Management Platform"/>
                                    </a>

                                </div>
                                 <h2>Ecommerce con Sanity</h2>
                                <p className="text-white-50 md:text-xl">Aplicación web creada con React y Next, para gestión de contenidos y pagos en línea con stripe. Implementada con Sanity como principal CMS.</p>
                            </div>
                            <div className="project" ref={project3Ref}>
                                <div className="image-wrapper bg-[#ffe7eb]">
                                    <a  target="_blank" href="https://awwards-site-five.vercel.app/">
                                        <img src="/images/gaming.png" alt=" YC Directory"/>
                                    </a>

                                </div>
                                <h2>Landing Page Gaming con Animaciones Avanzadas</h2>
                                <p className="text-white-50 md:text-xl">Página web interactiva inspirada en experiencias tipo Awwwards, con hero audiovisual, transiciones de video, animaciones con GSAP, efectos de scroll, tarjetas dinámicas y diseño responsivo. Desarrollada con React, Vite, Tailwind CSS y GSAP.</p>
                            </div>
                        </div>

                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection

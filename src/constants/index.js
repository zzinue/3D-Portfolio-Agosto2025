const navLinks = [
    {
        name: "Experiencia",
        link: "#experience",
    },
    {
        name: "Proyectos",
        link: "#work",
    },
    {
        name: "Habilidades",
        link: "#skills",
    },
    {
        // name: "Testimonials",
        // link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "Diseños", imgPath: "/images/designs.svg" },
    // { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Conceptos", imgPath: "/images/concepts.svg" },
    { text: "diseños", imgPath: "/images/designs.svg" },
    { text: "Codigo", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 6, suffix: "+", label: "Meses de Experiencia Profesional" },
    { value: 20, suffix: "+", label: "Proyectos y prácticas desarrolladas" },
    { value: 30, suffix: "+", label: "Sitios Responsivos y Optimizados" },
    { value: 90, suffix: "%", label: "Código Reutilizable y Escalable" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/three.png",
    },
    {
        imgPath: "/images/logos/firebase.png",
    },
    {
        imgPath: "/images/logos/git.svg",
    },
    {
        imgPath: "/images/logos/GitHub-Mark.png",
    },
    {
        imgPath: "/images/logos/JavaScript-logo.png",
    },
    {
        imgPath: "/images/logos/mongodb.png",
    },
    {
        imgPath: "/images/logos/Node.js_logo.svg",
    },
    {
        imgPath: "/images/logos/React-icon.svg",
    },
    {
        imgPath: "/images/logos/Tailwind_CSS_Logo.svg",
    },
    {
        imgPath: "/images/logos/vercel.png",
    },
    {
        imgPath: "/images/logos/WordPress_blue_logo.svg",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Enfoque en la Calidad",
        desc: "Entregando resultados de alta calidad mientras cuido cada detalle con precisión.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Comunicación Confiable",
        desc: "Manteniéndote actualizado en cada paso para garantizar transparencia y claridad.",
    },
    {
        imgPath: "/images/time.png",
        title: "Entregas Puntuales",
        desc: "Asegurando que los proyectos se completen a tiempo, con calidad y atención al detalle.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Framework de Estilos ",
        modelPath: "/models/tailwind.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Se desarrollaron y mantuvieron sitios web en PHP y Bootstrap, logrando mejoras en rendimiento y estabilidad.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/novamentor.jpg",
        title: "Desarrollador Web",
        date: "Febrero - Mayo 2024",
        responsibilities: [
            "Desarrollo de sitios Web con Bootstrap",
            "Mantenimiento a proyectos existentes PHP",
            "Corrección de componentes",
        ],
    },
    {
        review: "Se implementaron soluciones en WordPress y WooCommerce para potenciar la presencia digital de diferentes negocios.",
        imgPath: "/images/exp2.png",
        logoPath: "/images/akeisolucines.jpg",
        title: "Desarrollador Frontend",
        date: "Abril  - Septiembre 2023",
        responsibilities: [
            "tDesarrollo de sitios Web con Wordpress y Elementors.",
            "Creación de Ecommerce con WooCommerce.",
            "Modificación de plantillas Wordpress para cursos en línea.",
            "Respaldo de sitios web y mantenimiento",
        ],
    },
    {
        review: "Se diseñaron y optimizaron landing pages enfocadas en HTML, CSS y JavaScript, aumentando la visibilidad de una empresa turística.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/freelance.jpg",
        title: "Desarrollador Web Freelancer",
        date: "Diciembre 2022 - Febrero 2023",
        responsibilities: [
            "Desarrollo de landing pages",
            "Desarrollo de Frontend para compañia de turismo",
            "Diseño de Landing pages HTML, CSS y Javascript"
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [

    // {
    //     name: "fb",
    //     imgPath: "/images/fb.png",
    // },
    {
        name: "YouTube",
        imgPath: "/images/youtube.png",
        url: "https://www.youtube.com/@zzinuecode"
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        url:"https://www.linkedin.com/in/zzinue/"
    },
];

// const projects = [
//     {
//         name: "Página Interactiva para el Mundo Gamer",
//         description:
//             "Moderna Interfaz de video juegos creada con ReactJS y Tailwind CSS. 100% responsiva animada con GSAP.",
//         tags: [
//             {
//                 name: "reactjs",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "tailwindcss",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "GSAP",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: jobit,
//         source_code_link:
//             "https://awwards-site-4nui3tq7h-zzinues-projects.vercel.app/",
//     },
//     {
//         name: "Full-Stack e-commerce Sanity CMS",
//         description:
//             "Aplicación web creada con React y Next, para gestión de contenidos y pagos en línea con stripe. Implementada con Sanity como principal CMS.",
//         tags: [
//             {
//                 name: "react",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "mongodb",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "nextjs",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: carrent,
//         source_code_link: "https://ecommerce-sanity-stripe-zzinue.vercel.app/",
//     },
//
//     {
//         name: "Bootstrap Landing Page",
//         description:
//             "Página web desarrollada con las tecnologías de Bootstrap, HTML y CSS3.",
//         tags: [
//             {
//                 name: "nextjs",
//                 color: "blue-text-gradient",
//             },
//             {
//                 name: "bootstrap",
//                 color: "green-text-gradient",
//             },
//             {
//                 name: "css",
//                 color: "pink-text-gradient",
//             },
//         ],
//         image: tripguide,
//         source_code_link: "https://boostrap-bootcamp-page.vercel.app/",
//     },
// ];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    // projects
};
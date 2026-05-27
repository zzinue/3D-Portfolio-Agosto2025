import React, {useRef, useState} from 'react'
import TitleHeader from "../components/TitleHeader.jsx";
import ContactExperience from "../components/ContactExperience.jsx";
import emailjs from '@emailjs/browser'
import toast from "react-hot-toast";


const Contact = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
            )
            toast.success("Mensaje enviado correctamente");
            //resent the form after submission
            setFormData({name: '', email: '', message: ''})

        } catch (error) {
            console.log('Error al enviar el mensaje: ', error);
            toast.error("No se pudo enviar el mensaje. Inténtalo de nuevo.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id='contact' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader title="Trabajemos Juntos" sub='📧 Contacto'/>


                <div className='mt-16 grid-12-cols'>
                    {/* Left side - Contact Form */}
                    <div className='xl:col-span-5  '>
                        <div className='flex-center  card-border rounded-xl p-10'>
                            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-7' ref={formRef}>
                                <div>
                                    <label htmlFor='name'>Nombre</label>
                                    <input
                                        onChange={handleChange}
                                        type='text'
                                        id='name'
                                        name='name'
                                        value={formData.name}
                                        placeholder='Tu nombre'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        onChange={handleChange}
                                        name='email'
                                        value={formData.email}
                                        type='email'
                                        id='email'
                                        placeholder='Tu email'
                                    />
                                </div>

                                <div>
                                    <label htmlFor='message'>Mensaje</label>
                                    <textarea
                                        onChange={handleChange}
                                        name='message'
                                        value={formData.message}
                                        id='message'
                                        rows='5'
                                        placeholder='Escribe un mensaje...'
                                    ></textarea>
                                </div>

                                <button type='submit' disabled={loading}>
                                    <div className='cta-button group '>
                                        <div className='bg-circle'/>
                                        <p className='text'>{loading ? 'Enviando...' : 'Enviar'}</p>
                                        <div className='arrow-wrapper'>
                                            <img src='/images/arrow-down.svg' alt='arrow'/>
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right side - 3D Experience */}
                    <div className='xl:col-span-7 min-h-96'>
                        <div className='w-full h-full bg-[#cd7c2e] hover:cursor-grab rounded-3xl overflow-hidden'>
                            <ContactExperience/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

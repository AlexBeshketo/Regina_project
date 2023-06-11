import React, {useRef} from 'react';
import c from './ContactForm.module.css';
import emailjs from '@emailjs/browser'

export const ContactForm = () => {


    const form: any = useRef();

    const sendEmail = (e: any) => {
        e.preventDefault();

        // @ts-ignore
        emailjs.sendForm('service_iw3mxdp', 'template_e9gidum', form.current, 'psc58AySgcbWa5aKw')
            .then((result) => {
                alert('Žinute išsiusta, mes susisieksim')
                // @ts-ignore
                window.location.reload(false)
            }, (error) => {
                alert('Kažkas negerai, bandykite dar karta')
            });
    };


    return (
        <div className={c.container}>
            <div className={c.contact_form}>
                <form ref={form} onSubmit={sendEmail}>
<div className={c.text}>Jei susidomėjote mūsų darbu, susisiekite su mumis tel +37063923767 arba užpildykite forma žemiau</div>
                    <div className={c.container_form}>
                        <label>Name</label>
                        <input type="text"  name="user_name" className={c.feedback_input}/>

                        <label className={c.half}>Email</label>
                        <input type="email" name="user_email" className={c.feedback_input}/>


                        <label className={c.half}>Message</label>
                        <textarea name="message" className={c.feedback_input}/>

                        <input type="submit" className={c.flat_button} value="Siusti"/>
                    </div>

                </form>
            </div>


        </div>


    )
}
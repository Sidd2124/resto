import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import WhatsApp from '../Assets/whatsapp.png'
import Insta from '../Assets/Insta.png'
import "./Contact.css"
const Contact = () => {
    const form = useRef();
    const sendEmail = async (e) => {
        e.preventDefault();
    
        try {
           await emailjs.sendForm(
            'service_lk3gdme',
            'template_3fhp1ha',
            form.current,
            'UjuOxNVl6kmtYzcvC'
          );
    
          console.log("akj");
    
          e.target.reset();
    
          alert('Message Sent Successfully');
         
        } catch (error) {
          console.error(error.text);
        }
      };
    return (
        <div className="ContactTop">
            <h1 className='ContactTitle'>Contact US</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.5673371105217!2d78.39220267522353!3d17.52815529873454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8fd4026ffd11%3A0x97ba947100e0a362!2sIDEAL%20kitchen!5e0!3m2!1sen!2sin!4v1712933211142!5m2!1sen!2sin"
                width="370"
                height="200"
                title="Map of Ideal Kitchen"
            ></iframe>
     <form ref={form} onSubmit={sendEmail} className="contact-form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder='Enter Your Name' />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder='Enter Your Mail Adrress' name="from_name" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder='Enter Your Massage' rows="4"></textarea>
    </div>
    <button type="submit">Send</button>
</form>
<div className='ContactBottom'>
<a href="https://wa.me/9347877159"><img className='WhatsAppLogo'  src={WhatsApp} alt="Whats App Logo"/></a>
<a href='https://www.instagram.com/mr.sidd07?igsh=MXRtNzl6ZGVvNXBxcw=='><img className='WhatsAppLogo' src={Insta} alt='Instagram Icon'/></a>
</div>
        </div>
    );
}

export default Contact;

import React from 'react'
import './contact.css'
import {FiMail} from 'react-icons/fi'
import {FiInstagram} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
  const form  = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_5hbb90r', 'template_yaprn6l', form.current, 'FkjlbAv2KMaXCp52Y')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aadilgani2001@gmail.com</h5>
            <a href="mailto:aadilgani2001@gmail.com" target="_blank" rel="noreferrer">Mail Me</a>
          </article>
          <article className="contact__option">
          <FiInstagram className='contact__option-icon'/>
            <h4>Instagram</h4>
            <h5>Aadil Gani</h5>
            <a href="https://m.me/" target="_blank" rel="noreferrer">DM Me</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+918959585986</h5>
            <a href="https://api.whatsapp.com/send?phone=+918959585986 "target="_blank" rel="noreferrer">WhatsApp Me</a>
          </article>
        </div>

          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
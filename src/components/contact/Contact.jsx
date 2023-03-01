import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

//Icons
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oys0vpl', 'template_4ktyyuj', form.current, 'syDEJe2jlfdl-0bTB')
    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>b.m.schwartz92@gmail.com</h5>
            <a href="mailto:b.m.schwartz92@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>
            <h4>Messenger</h4>
            <h5>Ben Schwartz</h5>
            <a href="https://m.me/benjamin.schwartz.98" target="_blank">Send a message</a>
          </article>

        </div>
        {/* End of Contact Options */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary btn-submit">Send Message</button>
        </form>

      </div>
    </section>
  )
}

export default Contact
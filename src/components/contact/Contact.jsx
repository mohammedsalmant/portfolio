import React, { useRef } from 'react';
import './Contact.css';
import {MdMailOutline} from 'react-icons/md';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {FaWhatsapp} from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_kc3cht3', 'template_rdk7kom', form.current, 'I5aYJ3wz0P4ombvFq')
  
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>  
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
            <article className='contact__option'>
              <MdMailOutline className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>salmanmohammedt@gmail.com</h5>
              <a href="mailto:salmanmohammedt@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <AiOutlineLinkedin className='contact__option-icon'/>
              <h4>Linked In</h4>
              <h5>Mohammed Salman T</h5>
              <a href="https://m.me/mohammedsalman.t1" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <FaWhatsapp className='contact__option-icon'/>
              <h4>Whatsapp</h4>
              <h5>+971526034119</h5>
              <a href="https://api.whatsapp.com/send?phone+971526034199" target='_blank'>Send a message</a>
            </article>
        </div>
        {/* {End of contact options} */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
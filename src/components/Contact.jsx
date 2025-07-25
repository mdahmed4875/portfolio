import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7a3gykh',      // replace with your actual Service ID
      'template_bznep46',     // replace with your actual Template ID
      form.current,
      '39vFSs11ZcErC8eyn'       // replace with your actual Public Key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        console.log(result.text);
        form.current.reset();
      },
      (error) => {
        alert("Message failed to send.");
        console.log(error.text);
      }
    );
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;

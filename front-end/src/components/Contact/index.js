import React from 'react';
import './style.scss';


const Contact = () => (
  <div className="contact__container">
    <form>
      <label>Nom</label>
      <input type="text" id="fname" name="firstname" placeholder="Votre nom" />


      <label>Email</label>
      <input type="email" id="email" name="email" placeholder="Votre email" />


      <label>Message</label>
      <textarea id="subject" name="subject" placeholder="Votre message..." />
      <input className="button" type="button" value="Envoyer" />
    </form>

  </div>
)
  ;

export default Contact;
import React from 'react';
import './style.scss';


const Contact = () => (
  <div className="contact__container">
    <form>
      <label>Nom</label>
      <input className="contact__input" type="text" id="fname" name="firstname" placeholder="Votre nom" />


      <label>Email</label>
      <input className="contact__input" type="email" id="email" name="email" placeholder="Votre email" />


      <label>Message</label>
      <textarea className="contact__textarea" id="subject" name="subject" placeholder="Votre message..." />
      <input className="contact__input input" type="button" value="Envoyer" />
    </form>

  </div>
)
  ;

export default Contact;
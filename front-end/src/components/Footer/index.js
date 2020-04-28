import React from 'react';
import {
  Link,
} from "react-router-dom";
import './style.scss';

const Footer = () => (
  <ul className="footer__container">       
    <Link to="/legal-notice" ><li className="footer__link">Mentions légales</li></Link>
    <Link to="/contact"><li className="footer__link">Contacter le support</li></Link>
    <Link to="/information"><li className="footer__link">Informations</li></Link>
    <Link to="/faq"><li className="footer__link">FAQ</li></Link>
    <p className="footer__text">&copy;2020 AlloCrew All rights reserved</p> 
  </ul>
)
;

export default Footer;
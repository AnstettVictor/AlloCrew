import React from 'react';
import './style.scss';

const LegalNotice = () => (
  <div className="legalNotice__container">
    <h1 className="legalNotice__titlePage">Mentions légales</h1>
    <article className="legalNotice__article">
      <h2 className="legalNotice__titleArticle"></h2>
      <p className="legalNotice__pArticle">Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique, dite L.C.E.N., nous portons à la connaissance des utilisateurs et visiteurs du site : <a href="http://www.allocrew.fr" target="_blank">www.allocrew.fr</a> les informations suivantes :</p>
    </article>
    <article className="legalNotice__article">
      <h2 className="legalNotice__titleArticle">ÉDITEUR</h2>
      <p className="legalNotice__pArticle">Le site <a href="http://www.allocrew.fr">www.allocrew.fr</a> est la propriété exclusive de <strong>01234567891011 </strong><strong>AlloCrew S.A.S.</strong>, qui l'édite.</p>
    </article>
    <article className="legalNotice__article">
      <h2 className="legalNotice__titleArticle">AlloCrew S.A.S</h2>
      <p className="legalNotice__pArticle"><strong>01234567891011 </strong>au capital de<strong> </strong><strong>80000 </strong>€   Tél: <strong>0102030405</strong>
      <strong>5 Rue Crue </strong><strong>75000 Paris</strong><br />Immatriculée au Registre du Commerce et des Sociétés de  <strong>RCS Paris </strong>sous le numéro<strong> </strong><strong>012345678910</strong><strong> </strong>
      Numéro TVA intracommunautaire : <strong>3244322</strong><br />Adresse de courrier électronique : <strong>allo@allocrew.fr</strong> <br /> <br />Directeur de la  publication : <strong>Allo Crew</strong><br />Contactez le responsable de la publication : <strong>allo@AlloCrew.fr</strong></p>
    </article>
  </div>
);

export default LegalNotice;
import React from 'react';
import './style.scss';

const FAQ = () => (
  <div className="faq__container">
    <h1 className="faq__titlePage">FAQs</h1>
    <p className="faq__introduction"> AlloCrew is about usce sed felis condimentum, aliquet neque tristique, aliquam justo. Fusce eu aliquam erat. Proin sed malesuada tortor, ac laoreet ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

    <article className="faq__article ">
      <h2 className="faq__titleArticle">Comment déposer une annonce ?</h2>
      <p className="faq__pArticle">Pour déposer une annonce : Cliquez sur « Déposer une annonce ». Renseignez le formulaire en respectant les informations demandées.Choisissez avec soin le titre et le descriptif de votre annonce pour optimiser votre vente.</p>
    </article>

    <article className="faq__article ">
      <h2 className="faq__titleArticle">Que mettre dans le texte de mon annonce ?</h2>
      <p className="faq__pArticle">Afin que les utilisateurs disposent d'un maximum d'informations, nous vous conseillons de détailler précisément le bien à vendre dans le texte de votre annonce. Choisissez avec soin le titre de votre annonce et renseignez l’ensemble des critères proposés. Lors du dépôt, des bulles d’informations vous indiquent les éléments à fournir pour réussir le dépôt d’annonce. Il n'est pas possible d'utiliser du code et des étiquettes HTML. Celui-ci sera automatiquement effacé. Enfin, veillez à respecter les règles de diffusion de la catégorie dans laquelle votre annonce est déposée afin qu'elle ne soit pas refusée.</p>
    </article>

    <article className="faq__article ">
      <h2 className="faq__titleArticle">Comment insérer des photos dans mon annonce ?</h2>
      <p className="faq__pArticle">Les formats acceptés: En cas difficulté pour insérer une photo dans votre annonce, nous vous invitons à vérifier le format de votre photo. Les photos doivent être au format GIF, BMP, PNG ou JPEG.</p>
    </article>

    <article className="faq__article ">
      <h2 className="faq__titleArticle">Puis-je déposer une annonce pour un tiers ?</h2>
      <p className="faq__pArticle">Si quelqu’un vous demande de déposer une annonce pour lui via un réseau social, méfiez-vous ! Le compte de cette personne a peut-être été piraté. Il s’agit probablement d’une annonce frauduleuse, n’y donnez pas suite. Si l’annonce a déjà été confirmée, nous vous invitons à nous la signaler via le bouton « signaler un abus » en bas de la page de l’annonce concernée.</p>
    </article>

    <article className="faq__article ">
      <h2 className="faq__titleArticle">Règles de diffusion</h2>
      <p className="faq__pArticle">Toute annonce contenant des éléments de texte (mots, expressions, phrases… etc.) qui sembleraient contraires aux dispositions légales ou réglementaires, aux bonnes mœurs, aux règles de diffusion de notre site ou susceptible de troubler ou choquer les lecteurs sera refusée par leboncoin, donc non référencée sur notre site, sans que cela ne fasse naître au profit de l'annonceur un quelconque droit à indemnité.</p>
    </article>
  </div>
);

export default FAQ;

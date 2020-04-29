import React from 'react';
import './style.scss';

const Information = (state) => { console.log("STAAAAAAAAAAAAAAAATE", state) 
return(
  <div>
  <div className="information">
    <h2 className="title">Informations</h2>
    <section class="cards">
      <article class="card card--1">
        <div class="card__info-hover">    
          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
        </div>
        <div class="card__img"></div>
        <a href="https://www.linkedin.com/in/ludovic-argenty/" class="card_link">
        <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> Ludovic Argenty</span>
          <h3 class="card__title">Project Manager, Product Owner & Front-end dev</h3>    
        </div>
      </article>

      <article class="card card--2">
        <div class="card__info-hover">    
          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
        </div>
        <div class="card__img"></div>
        <a href="https://www.linkedin.com/in/victor-anstett-a83a7a1a2/" class="card_link">
        <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> Victor Anstett</span>
          <h3 class="card__title"> Lead Back-End & Sysadmin</h3>    
        </div>
      </article>

      <article class="card card--3">
        <div class="card__info-hover">    
          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
        </div>
        <div class="card__img"></div>
        <a href="https://www.linkedin.com/in/ludovic-argenty/" class="card_link">
        <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> Charlie Boyer</span>
          <h3 class="card__title">Lead dev Front-end</h3>    
        </div>
      </article>

      <article class="card card--4">
        <div class="card__info-hover">    
          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
        </div>
        <div class="card__img"></div>
        <a href="https://www.linkedin.com/in/ludovic-argenty/" class="card_link">
        <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> Alexis Carrer</span>
          <h3 class="card__title">Scrum master & Back-end dev</h3>    
        </div>
      </article>

      <article class="card card--5">
        <div class="card__info-hover">    
          <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
        </div>
        <div class="card__img"></div>
        <a href="https://www.linkedin.com/in/bogdanpatroi/" class="card_link">
        <div class="card__img--hover"></div>
        </a>
        <div class="card__info">
          <span class="card__category"> Bogdan PATROI</span>
          <h3 class="card__title">Front-end dev & Git Master</h3>    
        </div>
      </article>
    </section>
  </div>

  <h2 className="title"> Remerciements:</h2>
    <article class="card card--6">
          <div class="card__info-hover">    
            <path fill="#000000" d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z" />   
          </div>
          <div class="card__img"></div>
          <a href="https://www.linkedin.com/in/arthurbourdot/" class="card_link">
          <div class="card__img--hover"></div>
          </a>
          <div class="card__info">
            <span class="card__category"> Arthur Bourdot</span>
            <h3 class="card__title">Création du logo, et des images par défauts. Merci à toi !</h3>    
          </div>
    </article>
  </div>

)};

export default Information;

/* eslint-disable no-unused-vars */
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './accueil.scss'

function Accueil() {
  return (
    <div className="accueil">
      <div className="hero-section">
        <div class="carousel-wrapper">
          <span id="item-1"></span>
          <span id="item-2"></span>
          <span id="item-3"></span>
        <div class="carousel-item item-1">
          <a href="#item-3" class="arrow-prev arrow"></a>
          <a href="#item-2" class="arrow-next arrow"></a>
        </div>
        <div class="carousel-item item-2">
          <a href="#item-1" class="arrow-prev arrow"></a>
          <a href="#item-3" class="arrow-next arrow"></a>
        </div>
        <div class="carousel-item item-3">
          <a href="#item-2" class="arrow-prev arrow"></a>
          <a href="#item-1" class="arrow-next arrow"></a>
        </div>
  </div>
      </div>
      <div className="intro">
        <h2>
          <span>Abdelouahed El Kadiri</span><br />
          Un Homme, Une Fondation, Un Projet
        </h2>
        <hr />
        <div className="cards">
          <div className="card">
            <h3>
              Une fondation d'utilité publique
            </h3>
            <p>
            Guidée par des valeurs humaines universelles telles que le partage du Savoir et la promotion de l'Art et de la Culture, valeurs si chères d'ailleurs à nos authentiques résistants, la famille EL KADIRI a eu l'idée de créer une Fondation dont l'objet social serait « l'encouragement et le développement de l'instruction, du sport, des arts, de la culture, de la recherche scientifique, de la formation et de l'éducation.
            </p>
          </div>
          <div className="card">
            <h3>
              Une fondation comme un devoir de mémoire
            </h3>
            <p>
              Pour donner à cette fondation tout son sens, les membres fondateurs ont tenu à la doter d'une mémoire, d'une histoire; celle d'un authentique résistant qui a consacré justement toute sa vie à la défense de valeurs humaines universelles telles que la Liberté, la Dignité et le Savoir. Cette personne n'est autre que Feu Abdelouahed El Kadiri.
            </p>
          </div>
          <div className="card">
            <h3>
              Une fondation sensible au développement de l'Homme
            </h3>
            <p>
              Pour qu'elle puisse communiquer adéquatement sur cette période riche de l'histoire marocaine et transmettre un message fort à la jeunesse d'aujourd'hui, la Fondation Abdelouahed El Kadiri a opté pour une approche éclectique choisissant de porter différents projets du moment qu'ils contribuent au développement de valeurs humaines universelles si chères à son éponyme..
            </p>
          </div>
        </div>
      </div>
      <div className="video-section">
        <div className="left">
          <span>Et le rêve</span>
          <h3>DEVIENT RÉALITÉ</h3>
          <hr />
          <p>
            Le Complexe Culturel Abdelouahed El Kadiri vient arc-bouter la volonté de Sa Majesté Le Roi Mohammed VI, que Dieu le glorifie, de faire de l'élément culturel un levier du développement territorial et du rayonnement des villes : un pole culturel polyvalent qui aura pour mission la promotion de l'activité artistique dans la ville d'El Jadida, (cinéma, musique, théâtre, etc.) et la symbiose des générations de différentes catégories sociales et culturelles. Le projet trouve son inspiration dans une lecture des éléments constitutifs des paysages naturels et urbains.
          </p>
        </div>
        <div className="right">
          <video height="360" width="600" autoplay loop muted controls id="myVideo">
            <source src='\uploads\video.mp4'  type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className="services-section">
        {/* services section */}
      </div>
    </div>
  )
}

export default Accueil
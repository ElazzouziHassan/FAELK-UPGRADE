/* eslint-disable no-unused-vars */
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './qui-somme-nous.scss';


function QuiSommeNous() {
  return (
    <div className="qui-some-nous">
      <div className="mot-president">
        <div className="left">
          <img src="\uploads\mot-president-kadiri.jpg" alt="Abdelouahed EL KADIRI" />
        </div>
        <div className="right">
          <p>
            Mes remercîments les plus sincères vont aux acteurs qui se mobilisent et qui permettent à la Fondation Abdelouahed EL KADIRI, depuis sa création en 2007 puis sa reconnaissance d'utilité publique en 2012, de continuer à amplifier son action en faveur de l'éducation, la culture, l'art, le sport, la recherche et une multitude d'actions caritatives auxquels s'ajoute la construction du centre culturel multidisciplinaire qui abrite une bibliothèque, salles de cinéma, salles d'expositions des tableaux d'art, salles des cours de peinture et de formation artistique...etc.
          </p>
          <p>
            Nos programmes reposent sur les trois grands axes de la feuille de route de la fondation à savoir : <br />
            <span> - Le soutien de projets caritatifs, éducatifs et culturels</span><br />
            <span> - La promotion de l'art et le soutien des artistes</span><br />
            <span> - La promotion du sport</span><br />
            <span> - La valorisation de la recherche et du développement</span><br />
            <p>
            Cette feuille de route est le fruit d'un travail constant de notre Conseil d'Administration qui se réunit régulièrement pour décider du financement des projets retenus. Car, au-delà des sommes que nous versons, nous nous impliquons auprès des porteurs de projets pour les aider à trouver ensembles les meilleures solutions. Etre une « caution morale », un facilitateur fait aussi partie de nos missions...
            </p>
            <p>
            En quête de solutions toujours plus innovantes et efficaces pour le développement de la santé, de l'éducation, de la culture et du sport, notre équipe continue à repérer les acteurs qui développent des projets innovants et de qualité au profit des personnes les plus nécessiteuses.
            </p>
            <p>
            Nous restons également très impliqués auprès des chercheurs pour aider à faire émerger de nouvelles réponses dans le domaine de l'éducation, à travers notre prix « Abdelouahed EL KADIRI ».
            </p>
          </p>
        </div>
      </div>
      <div className="notre-histoire">
        <h2>NOTRE HISTOIRE</h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2007"
          >
            <h3 className="vertical-timeline-element-title">
              La création de la Fondation Abdelouahed El Kadiri
            </h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008"
          >
            <h3 className="vertical-timeline-element-title">
              Démarrage du projet de la Bibliothèque de la Fondation
            </h3>
          </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010"
        >
          <h3 className="vertical-timeline-element-title">
            Inauguration officielle de la Bibliothèque
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Une conférence donnée par Alain Grunberg
          </h4>
          <p>
            sur le thème : La Géopolitique du Maroc
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2011"
        >
          <h3 className="vertical-timeline-element-title">
            Le 8ème Colloque Mohamed Zefzaf
          </h3>
          <p>
            sous le thème : Mohamed Zefzaf à travers ses entretiens
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2012"
        >
          <h3 className="vertical-timeline-element-title">
            Une rencontre autour de la lecture
          </h3>
          <p>
            sous le thème : Tous pour la lecture
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013"
        >
          <h3 className="vertical-timeline-element-title">
            Expositions collective de peinture
          </h3>
          <p>
            Palettes au féminin
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
        >
          <h3 className="vertical-timeline-element-title">
            Colloque International
          </h3>
          <p>
            sous le thème : Cultures au Maghreb
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015"
        >
          <h3 className="vertical-timeline-element-title">
            CAFE SLAM
          </h3>
          <p>
            avec Célim et Mustapha Slameur
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
        >
          <h3 className="vertical-timeline-element-title">
            Colloque International
          </h3>
          <p>
            Sous le thème : La ville et l'urbain visions nouvelles et regards croisés
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
        >
          <h3 className="vertical-timeline-element-title">
            Colloque International
          </h3>
          <p>
            sous le thème : Nouveaux Médias
          </p>
          <p>
            Interactions et Transactions
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018"
        >
          <h3 className="vertical-timeline-element-title">
            Troisième Edition des Deux Journées d'Etudes
          </h3>
          <p>
            sous le thème : Occupation humaine, gestion des ressources et recomposition de l'espace
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2020"
        >
          <h3 className="vertical-timeline-element-title">
            Fin des travaux
          </h3>
          <p>
            Complexe Culturel de la Fondation Abdelouahed EL KADIRI - El jadida
          </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
      <div className="a-propos">
        <div className="left">
          <h2>À propos de la Fondation</h2>
          <hr />
          <p>
            Créée en 2007, reconnue d'utilité publique en 2012, la Fondation Abdelouahed El KADIRI n'a cessé de contribuer au développement culturel et artistique des jeunes générations par des rencontres, des conférences, des expositions et ce dans la maison qu'habitait le nationaliste.
          </p>
          <p>
            Grâce au nouveau projet et grâce à la création du nouveau complexe, une ère nouvelle s’est imposée avec une médiathèque, une salle de conférences, des salles de cinéma, des espaces de loisirs pour enfants et adultes.
          </p>
          <p>
            Bien que l'inauguration officielle du complexe n'ait pas encore été à l'ordre du jour, en raison de la pandémie, l'action sociale et culturelle suit son chemin (bibliothèque ouverte) aux membres inscrits.
          </p>
          <p>
            Par ailleurs, la fondation s'investit dans l'action bienfaitrice à travers l'aide aux étudiants nécessiteux par l'octroi de bourses. Aujourd'hui, trois promotions poursuivent leurs études à l'université Euro-Mediterranée de Fès avec qui la Fondation a signé une convention.
          </p>
          <p>
            Cette convention assure une prise en charge des étudiants provenant d'El Jadida et sa région.
          </p>
        </div>
        <div className="right">
          <img src="\uploads\008.jpg" alt="la Fondation Abdelouahed El KADIRI" />
        </div>
      </div>
    </div>
  )
}

export default QuiSommeNous
/* eslint-disable no-unused-vars */
import React from 'react'
import './bibliotheque.scss'

function Bibliotheque() {
  return (
    <div className="bibliotheque">
      <div className="left">
        <img src="\uploads\mediatheque.jpg" alt="Bibliotheque" />
      </div>
      <div className="right">
        <h2>Bibliothèque</h2>
        <hr />
        <p>
          La mission de la médiathèque du complexe Culturel Abdelouahed El Kadiri est de contribuer à une démarche d'éducation permanente par la mise à disposition du public d'informations et de documentations sous différents supports (numériques et traditionnels). Pour ce faire, la médiathèque est aménagée sur une surface de 2 446.50 m2 qui comprend un important rayonnage. Avec un espace de lecture d'une capacité de 535 places et une salle spécifique pour enfants de 95 places utilisant un système de brise soleil pour filtrer la lumière et créer une ambiance propice à la lecture.
        </p>
        <p>
          Elle comprend également un accès aux contenus web (abonnements aux périodiques et bases de données) via des ordinateurs connectés à Internet haut débit.
        </p>
      </div>
    </div>
  )
}

export default Bibliotheque
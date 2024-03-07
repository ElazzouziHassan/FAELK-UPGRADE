/* eslint-disable no-unused-vars */
import React from 'react'
import './salles-cinema.scss'

function SallesCinema() {
  return (
    <div className="salles-cinema">
      <div className="left">
        <h2>Salles de cinéma</h2>
          <hr />
          <p>
            Le projet du complexe Culturel Abdelouahed El Kadiri prévoit la réalisation d'une salle de théâtre et de deux salles de cinema. Le but est d'encourager toutes les formes d'expression créatrices en mettant a la disposition des associations culturelles et du public en général des espaces de crèation, d'expression et de Communication disposant de toutes les avancées dans le domaine acoustique, visuel et scénique.
          </p>
          <p>
            La salle de théâtre d'une capacité de 387 places comprend une arrière scéne avec une salle de répétition des ateliers de décoration, une salle d'enseignement musical ainsi qu'une salle pour la scénographie.
          </p>
          <p>
          Utilisant une technologie trės développée. l'éclairage et la sonorisation du théâtre et des salles de cinema sont conçus de manière à accueillir aussi des activités nocturnes
          </p>
      </div>
      <div className="right">
        <img src="\uploads\salles-de-cinema.jpg" alt="salles cinema" />
      </div>
    </div>
  )
}

export default SallesCinema
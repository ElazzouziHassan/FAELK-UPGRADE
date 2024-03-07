/* eslint-disable no-unused-vars */
import React from 'react'
import './galerie-exposition.scss'

function GalerieExposition() {
  return (
    <div className="galerie-exposition">
      <div className="left">
        <h2>Galerie d'exposition</h2>
          <hr />
          <p>
            A travers ses expositions, la Fondation s’engage à promouvoir la création artistique moderne et contemporaine et contribue à son rayonnement tant sur le plan national qu’international.
          </p>
          <p>
            Chaque année des expositions temporaires d’art moderne et d’art contemporain marquent les temps forts de la Fondation, des expositions qui s’adressent à tous.
          </p>
      </div>
      <div className="right">
        <img src="\uploads\galerie-exposition.jpg" alt="Galerie d'exposition" />
      </div>
    </div>
  )
}

export default GalerieExposition
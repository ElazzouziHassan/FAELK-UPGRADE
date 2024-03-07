/* eslint-disable no-unused-vars */
import React from 'react'
import './auditorium.scss'

function Auditorium() {
  return (
    <div className="auditorium">
      <div className="left">
        <img src="\uploads\auditorium2.jpg" alt="Auditorium" />
      </div>
      <div className="right">
        <h2>Auditorium</h2>
        <hr />
        <p>
          Un lieu dédié à la création et à la rencontre entre les musiciens et les artistes de toutes disciplines. L’Auditorium offre une expérience hors du commun à ses visiteurs grâce à son acoustique exceptionnelle et ses équipements innovants.
        </p>
        <p>
          Afin de refléter la diversité et vitalité du monde de la musique, la Fondation propose dans l’Auditorium des concerts classiques, jazz ou contemporains... Depuis son inauguration, l’Auditorium a accueilli de nombreux artistes d’envergure internationale .
        </p>
      </div>
    </div>
  )
}

export default Auditorium
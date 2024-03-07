/* eslint-disable no-unused-vars */
import React from 'react'
import './nos-projets.scss'
import Bibliotheque from '../../components/projets-components/bibliotheque/Bibliotheque'
import SallesCinema from '../../components/projets-components/salles-cinema/SallesCinema'
import AteliersMusiquePeitures from '../../components/projets-components/ateliers-musique-peiture/AteliersMusiquePeitures'
import GalerieExposition from '../../components/projets-components/galerie-exposition/GalerieExposition'
import Auditorium from '../../components/projets-components/auditorium/Auditorium'

function NosProjets() {
  return (
    <div className="nos-projets">
      <Bibliotheque/>
      <SallesCinema/>
      <AteliersMusiquePeitures/>
      <GalerieExposition/>
      <Auditorium/>
    </div>
  )
}

export default NosProjets
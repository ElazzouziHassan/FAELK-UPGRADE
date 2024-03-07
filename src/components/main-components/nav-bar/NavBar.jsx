/* eslint-disable no-unused-vars */
import React from 'react'
import './nav-bar.scss'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a href="/"><img src="" alt="Fondation Abdelouahed EL KADIRI" /></a>
      </div>
      <div className="menu">
        <ul>
          <li><a href="/">ACCUEIL</a></li>
          <li><a href="/">QUI SOMMES-NOUS ?</a></li>
          <li><a href="/">NOS PROJETS</a></li>
          <li><a href="/">NOS PROGRAMMES</a></li>
          <li><a href="/">COMMUNICATION</a></li>
        </ul>
      </div>
      <div className="contact-info">
        <div className="horaire">
          <span><i class="fa fa-clock-o"></i> 09:00 - 17:00</span>
        </div>
        <div className="telphone">
          <span><a href="tel:+212523373698"><i class="fa fa-phone"></i>+212 523 80 06 01</a></span>
        </div>
      </div>
    </div>  
  )
}

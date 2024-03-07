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
        {/* introduction */}
      </div>
      <div className="video-section">
        {/* video section */}
      </div>
      <div className="services-section">
        {/* services section */}
      </div>
    </div>
  )
}

export default Accueil
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
// import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './nav-bar.scss'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <div className="logo">
        <a Link="/"><img src="\uploads\logo@2x.png" alt="Fondation Abdelouahed EL KADIRI" /></a>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/" className='link'>ACCUEIL</Link>
          </li>
          <li>
            <Link to="/qui-somme-nous" className='link'>QUI SOMMES-NOUS ?</Link>
          </li>
          <li>
            <Link to="/nos-projets" className='link'>NOS PROJETS</Link>
          </li>
          <li>
            <Link to="/nos-programmes" className='link'>NOS PROGRAMMES</Link>
          </li>
          <li>
            <Link to="/contactez-nous" className='link'>CONTACTEZ-NOUS</Link>
          </li>
        </ul>
      </div>
      <div className="contact-info">
        <div className="horaire">
          {/* <AccessAlarmIcon/> */}
          <span> 09:00 - 17:00</span>
        </div>
        <div className="telphone">
          <span>
            <a href="tel:+212523373698"> +212 523 80 06 01</a>
          </span>
        </div>
      </div>
    </div>  
  )
}

/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="left">
          <h2>contact :</h2>
          <label htmlFor="adress">Adresse :</label> 
          <address>
            Complexe Culturel Abdelhak El Kadiri, <br />
            Ouassat El Madina Hay El Matar, <br />
            24013 El Jadida
          </address>
          <label htmlFor="telephone">Telephone : </label> 
          <span>+212 523 37 36 98</span><br />
          <label htmlFor="email">E-mail : </label> 
          <span>contact@fondationAEK.org</span>
        </div>
        <div className="center">
          <h2>Menu :</h2>
          <ul>
            <li>
            <Link to="/qui-somme-nous" className='link'>QUI SOMMES-NOUS ?</Link>
            </li>
            <li>
            <Link to="/nos-programmes" className='link'>NOS PROGRAMMES</Link>
            </li>
            <li>
            <Link to="/nos-programmes" className='link'>NOS PROGRAMMES</Link>
          </li>
          <li>
            <Link to="/communication" className='link'>COMMUNICATION</Link>
          </li>
          </ul>
        </div>
        <div className="right">
          <h2>Social media</h2>
          <ul>
            <li><a href="#facebook">Facebook</a></li>
            <li><a href="#instagram">Instagram</a></li>
            <li><a href="#twitter">Twitter</a></li>
            <li><a href="#linkedin">LinkedIn</a></li>
            <li><a href="#youtube">Youtube</a></li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <span>© Copyright 2024, All rights reserved to Fondation Abdelouahed El Kadiri</span>
      </div>
    </div>
  )
}

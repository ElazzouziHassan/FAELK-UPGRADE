/* eslint-disable no-unused-vars */
import React from 'react'
import './contact.scss'

function Contact() {
  return (
    <div className="contactez-nous">
      <h2>Contactez Nous</h2>
      <div className="contact-card">
        <form action="">
          <h2>SOUTENEZ-NOUS</h2>
          <p>
            En faisant un don à la Fondation, vous nous apportez un soutien durable et efficace et vous nous permettez d'agir au quotidien.
          </p>
          <hr />
          <input type="text" name="nom" id="nom" placeholder='NOM*' /><br />
          <input type="email" name="email" id="email" placeholder='Adress Mail*' /><br />
          <textarea name="message" id="message" cols="30" rows="10" placeholder='Votre Message*'></textarea><br />
          <input type="button" value="Envoyer" />
        </form>
        <div className="contact-info">
          <label htmlFor="adress">ADDRESSE</label>
          <address>
            <p>
              Complexe Culturel Abdelhak El Kadiri <br />
              Ouassat El Madina Hay El Matar <br />
              24013 El Jadida <br />
            </p>
          </address>
          <label htmlFor="telephone">TÉLÉPHONE :</label>
          <span><a href="tel:+212 523 37 36 98">+212 523 37 36 98</a></span><br />
          <label htmlFor="email">EMAIL :</label>
          <span><a href="mailto:contact@fondationAEK.org">contact@fondationAEK.org</a></span>
        </div>
      </div>
    </div>
  )
}

export default Contact
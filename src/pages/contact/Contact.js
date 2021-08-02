import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footerbar from '../../components/footerbar/Footerbar'
import './contactStyle.css'
 function Contact() {
    return (
        <div>
            <Navbar />
        <div className="content">
            <h1>Contact</h1>
            <p className="parName">
                Pour obtenir un première étude gratuite de votre besoin, ou <strong> pour toute demande d'information</strong>, n'hésitez pas à nous envoyer un message à l'aide du formulaire ci-dessous !
            </p>
            <form>
                <label for="nom">NOM<span>*</span> </label> 
                <br></br>
                <input type="text" name="nom" class="A" size="32" placeholder="Votre nom" />
                <br></br>
                <label for="prenom">PRENOM <span>*</span></label>
                <br></br>
                <input type="text" name="prenom" size="32" class="B" placeholder="Votre prénom" />
                <br></br>
                <label for="email">EMAIL<span>*</span></label> 
                <br></br>
                <input type="text" name="Email" size="32" class="C" placeholder="Votre Courriel" />
                <br></br>
                <label for="adresse">MESSAGE </label> 
                <br></br>
                <textarea cols="39" rows="6" name="adresse" placeholder="Votre adresse"></textarea>
                <br></br>
                <div className="button_cont" align="center"><a className="example_b" href="#"  >SOUMETTRE</a></div>      
            </form>
        </div>
        <Footerbar />
        </div>
    )
}
export default Contact;
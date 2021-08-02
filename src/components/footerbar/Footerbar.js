import React from 'react'
import contact from "./images/contact.png"
import fr from "./images/fr.PNG"
import ar from "./images/ar.PNG"
import ang from "./images/ang.PNG"
import './main.css'
function Footerbar() {
    return (
      
        <div> 
        <div className="foott">
            <ol>
                <li><h3>PROCHAINS ÉVÈNEMENTS</h3></li>
                <li><p>Il n’y a aucun évènements à venir pour le moment.</p></li>
            </ol>
            <ol>
                <li><h3>NOUS CONTACTER</h3></li>
                <li><p>Route Sidi Harazem, Fes</p></li>
                <li> <a href="mailto:contact@chu-fes.ma" className="link">contact@chu-fes.ma</a> </li>
            </ol>
            <ol>
                <li><h3>RECHERCHE</h3></li>
                <li>
                    <input id="sear" type="search" placeholder="Rechercher…" value="" />
                </li>
                <li className="lang">
                    <a lang="ar" href="$">
                        <img src={ar} title="العربية" alt="العربية" />
                        <span >العربية</span>
                    </a>
                </li>
                <li className="lang" >
                    <a lang="fr-FR" href="$">
                        <img src={fr} title="Français" alt="Français" />
                        <span >Français</span>
                    </a>
                </li>
                <li className="lang">
                    <a lang="en-US" href="$">
                        <img src={ang} title="English" alt="English" />
                        <span >English</span>
                    </a>
                </li>
            </ol>
            <ol>
                <li><h3>SERVICE RÉCLAMATION</h3></li>
                <li><img className="im" src={contact} alt="" /></li>
            </ol>
            <div className="scrole">
                <a  name="" id="scrol" class="btn-primary" href="#" role="button"><i class="fas fa-angle-double-up"></i></a>
            </div>
        </div> 
       
    </div>
    )
}
export default Footerbar
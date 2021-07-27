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
                    <input type="search" placeholder="Rechercher…" value="" />
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
                <a  name="" id="scrol" class="btn btn-primary" href="#" role="button"><i class="fas fa-angle-double-up"></i></a>
            </div>
        </div> {/*
        <div class="footer-basic">
        <footer>
            <div class="social">
                <a href="#"><i class="icon ion-social-instagram"></i></a>
                <a href="#"><i class="icon ion-social-snapchat"></i></a>
                <a href="#"><i class="icon ion-social-twitter"></i></a>
                <a href="#"><i class="icon ion-social-facebook"></i></a>
            </div>
            <ul class="list-inline">
                <li class="list-inline-item" ><a href="/">Home</a></li>
                <li class="list-inline-item"><a href="/Article">Article</a></li>
                <li class="list-inline-item"><a href="/Blog">Blog</a></li>
                <li class="list-inline-item"><a href="/Contact">Contact</a></li>
            </ul>
            <p class="copyright">Company AKRAM ESAAIDI © 2021</p>
        </footer>
    </div>
        
    <div className="foot" style={{display:'flex'}}>
        <p>Nous utilisons des cookies pour optimiser notre site web et notre service. <a>Politique de cookies</a></p>
        <ol>
            <button className="btn1"><a href="#">Accepter</a></button>
            <button className="btn2"><a href="#">Refuser</a></button>
            <button className="btn3"><a href="#">Préférences</a></button>
        </ol>
    </div>
    */}
    </div>
    )
}
export default Footerbar
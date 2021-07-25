import React from 'react'
import './main.css'
function Footerbar() {
    return (
        <div>
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
    </div>
    )
}
export default Footerbar
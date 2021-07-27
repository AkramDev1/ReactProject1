import React from 'react'
import logo from './logo.png';
import './style.css'

function Navbar() {
    return (
        <div className="bar0">
            <div className="bar1">
                <img className="logoo" src={logo} alt="" />
                <div className="social">
                    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
                    <a href="https://snapchat.com"><i className="fab fa-snapchat"></i></a>
                    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
                    <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                    <a href="https://google.com"><i className="fab fa-google-plus-g"></i></a>
                </div>
            </div>
            <div className="bar2" id="scrol">
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className="checkbtn">
                        <i class="fas fa-bars" id="btn"></i>
                        <i class="fas fa-times" id="cancel"></i>
                    </label>

                    <ul className="serie">
                    <li><a href="/" className="active">Home</a></li>
                <li><a href="/Article" className="active2" >Article</a></li>
                <li><a href="/Blog" className="active3">Blog</a></li>
                <li><a href="/Contact" className="active4">Contact</a></li>                        </ul>
                </nav>
            </div>
            {/*
        <nav>
            //2//
            <input type="checkbox" id="check" />
            <label for="check" className="checkbtn">
                <i class="fas fa-bars" id="btn"></i>
                <i class="fas fa-times" id="cancel"></i>
            </label>
            <img src={logo} alt="" />
            <ul className="serie">
                <li><a href="/" className="active">Home</a></li>
                <li><a href="/Article" className="active2" >Article</a></li>
                <li><a href="/Blog" className="active3">Blog</a></li>
                <li><a href="/Contact" className="active4">Contact</a></li>
            </ul>*/}

            {/* ///1///<div>
            <input type="checkbox" id="check" />
            <label for="check" class="checkbtn">
                  <i class="fas fa-bars"></i>
            </label>
           <div style={{display:'flex'}} className="menuu">
                 <img className="logo" src={logo} alt="" />
                 <nav>
                     <a href="/">Home</a>     
                     <a href="/Article">Articles</a>   
                     <a href="#">Blog</a>
                     <a href="#">Contact</a>
                     <div class="animation start-home"></div>
                 </nav>            
             </div>
         </div>
        </nav>*/}
        </div>

    )
}
export default Navbar;
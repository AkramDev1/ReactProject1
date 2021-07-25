import React from 'react'
import logo from '../../logo.png';
import './style.css'

function Navbar() {
    return (
        <nav>
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
            </ul>

            {/*<div>
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
         </div>*/}
        </nav>
    )
}
export default Navbar;
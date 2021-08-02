import React from 'react'
import logo from './logo.png';
import './style.css'

function Navbar() {
    return (
        <div className="bar0">
            <div className="bar2" id="scrol">
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fas fa-bars" id="btn"></i>
                        <i className="fas fa-times" id="cancel"></i>
                    </label>
    <ul className="serie">
                        <li><a href="/Home" className="active Home">Home</a></li>
                        <li><a href="/Article" className="Article" >Article</a></li>
                    <li><a href="/Blog" className="Blog">Blog</a></li>
                    <li><a href="/Contact" className="Contact">Contact</a></li> 
            </ul>
                </nav>
            </div>
         
        </div>

    )
}
export default Navbar;
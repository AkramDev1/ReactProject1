import React from 'react'
import logo from './logo.png';
import './style.css'
export default function Snavbar() {
    return (
        <div>
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
        </div>
    )
}

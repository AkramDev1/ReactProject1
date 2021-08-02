import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Footerbar from '../../components/footerbar/Footerbar'
import './blogStyle.css'
export default function Blog() {
    return (
        <div>
            <Navbar />
            <div>
                <h1>Blog</h1>
                <div className="blogMenu">
                    <h2>Rien de trouvé</h2>
                    <div className="page_contenu">
                        <h5>Il semblerait que nous ne soyons pas en mesure de trouver votre contenu. Essayez en lançant une recherche.</h5>
                        <form role="search" method="get" className="search-form" action="">
                            <input type="search" placeholder="Rechercher…" value="" name="s" />
                            <button className="btn2">Rechercher</button>
                        </form>
                    </div>
                </div>
            </div>
             <Footerbar />
        </div>
    )
}

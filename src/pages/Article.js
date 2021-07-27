/*import React from 'react'

import Sdata from './Sdata'
function Article(props) {
    return (
             <div className="row">
                  {this.state?.map((val) =>{
                    <div className="overflow" key={val.id}>
                    <image imgsrc={props.imgsrc} />
                    <cardtitle title={props.title} />
                    <button>

                    </button>
                  <paragraphe 
                </div>
              })}   
                     
                 </div>/>
                 <h1>hi</h1>
        </div>
    )
}
export default Article;*/
import React, { Component } from 'react'

import Articles from './Articles'
import USIC from './images/USIC.PNG'
import USIP from './images/USIP.PNG'
import USIN from './images/USIN.PNG'
import urgence from './images/urgence.PNG'

export class Article extends Component {

        constructor(props) {
          super(props)

          this.state = {
            Article : [

              {
                id: 1,
                img: USIC,
                title: "Unité de soins intensifs de cardiologie (USIC)",
                link: "http://www.chu-fes.ma/category/structures/page/4/",
                paragraphe: "CHEF DU SERVICE PERSONNEL DU SERVICE CORPS ENSEIGNANT CORPS MEDICAL CORPS INFORMIER DESCRIPTIF DU SERVICE EQUIPEMENT DU SERVICE STRUCTURE DU SERVICE LOCALISATION DU SERVICE ACTIVITES DU SERVICE ACTIVITES DE REFERENCE",
            }, 
             {
                id: 2,
                img: USIP,
                title: "Unité de soins intensifs de Pneumologie (USIP)",
                link: "http://www.chu-fes.ma/category/structures/page/4/",
                paragraphe: "CHEF DU SERVICE PERSONNEL DU SERVICE CORPS ENSEIGNANT CORPS MEDICAL CORPS INFORMIER DESCRIPTIF DU SERVICE EQUIPEMENT DU SERVICE STRUCTURE DU SERVICE LOCALISATION DU SERVICE ACTIVITES DU SERVICE ACTIVITES DE REFERENCE",
            },
             {
                id: 3,
                img: USIN,
                title: "Unité de soins intensifs de Neurologie (USIN)",
                link: "http://www.chu-fes.ma/category/structures/page/4/",
                paragraphe: "CHEF DU SERVICE PERSONNEL DU SERVICE CORPS ENSEIGNANT CORPS MEDICAL CORPS INFORMIER DESCRIPTIF DU SERVICE EQUIPEMENT DU SERVICE STRUCTURE DU SERVICE LOCALISATION DU SERVICE ACTIVITES DU SERVICE ACTIVITES DE REFERENCE",
            },
            {
                id: 4,
                img: urgence,
                title: "Unité de Soins Intensifs des Urgences Pédiatriques",
                link: "http://www.chu-fes.ma/category/structures/page/4/",
                paragraphe: "CHEF DU SERVICE PERSONNEL DU SERVICE CORPS ENSEIGNANT CORPS MEDICAL CORPS INFORMIER DESCRIPTIF DU SERVICE EQUIPEMENT DU SERVICE STRUCTURE DU SERVICE LOCALISATION DU SERVICE ACTIVITES DU SERVICE ACTIVITES DE REFERENCE",
            }
            ]
          }
        }


  render() {
    console.log(this.props)
    return (
      <div>
         <div className="row">              
            {this.state.Article?.map(article => (
              <div className="col-md-12" >
                  <Articles article={article}/>

               </div>
            ))}
          </div> 
      </div>
    )
  }
}

export default Article

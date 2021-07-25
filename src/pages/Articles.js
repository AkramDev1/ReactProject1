import React, { Component } from 'react'

export class Articles extends Component {
    render() {
        const {img, title,link, paragraphe} = this.props.article;
        return (
            <div className="cardT">
                <div className="card">
                      <img class="card-img-top" src={img}  />
                      <div class="card-body">
                          <span>
                                <h4 class="card-title">{title}</h4>
                                <a href={link}>...</a>
                          </span>
                          <p class="card-text">{paragraphe}</p>
                      </div>
                  </div>
            </div>
            
        )
    }
}

export default Articles

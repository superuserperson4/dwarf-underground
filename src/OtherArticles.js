import React, { Component } from 'react';
import './OtherArticles.css'
import OtherArticle from './OtherArticle.js'

class OtherArticles extends Component {
    render() {
        return(
        <div className="small-12 columns other-articles">
            <h2>From around the Realm</h2>
            {this.props.links.map(link => {
                return (
                    <OtherArticle src={link.src} alt={link.alt} text={link.text}/>
                );
            })}
        </div>
        );
    }
}

export default OtherArticles
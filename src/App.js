import React, { Component } from 'react';
import Header from './Header.js';
import Article from './Article.js';
import Ad from './Ad.js';
import OtherArticles from './OtherArticles';
import Footer from './Footer';
import './App.css';

const otherArticles = [
  {
    src:"https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
    alt:"orc",
    text:"Single Orcs in Indianapolis",
  },
  {
    src:"https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
    alt:"mountain",
    text:"You won't believe what's under this mountain",
  },
  {
    src:"http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
    alt:"gold",
    text:"Mine 20% more gold with One Weird Trick",
  },
  {
    src:"http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
    alt:"hobbit",
    text:"Surprise for Indiana Hobbits born before 1999",
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="expanded row">
          <Article/>
          <Ad/>
          <OtherArticles links={otherArticles}/>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;

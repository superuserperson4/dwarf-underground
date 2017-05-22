import React, { Component } from 'react';
import Header from './Header.js';
import Article from './Article.js';
import Ad from './Ad.js';
import OtherArticles from './OtherArticles';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>

        <main className="expanded row">
          <Article/>
          <aside className="large-4 medium-12 columns">
            <Ad/>
          </aside>

          <OtherArticles/>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default App;

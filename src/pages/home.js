import React from 'react';
/* import {Article} from '../components/article';
import {Footer, Header, Blog} from './containers'; */

import Article from '../components/article/Article'
import Blog from '../containers/blog/Blog'
import Footer from '../containers/footer/Footer'
import Header from '../containers/header/Header'
import './home.css'

const HomePage = () => (
  <div className="App">
    <div className="gradient__bg">
      <Article />
      <Header />
    </div>
    <Blog />
    <Footer />
  </div>
);

export default HomePage;
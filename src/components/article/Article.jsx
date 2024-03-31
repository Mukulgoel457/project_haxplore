import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/som2.png';
import './article.css';
//import '../article/article.css'
const Article = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="temple__navbar">
      <div className="temple__navbar-links">
        <div className="temple__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="temple__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt3">Booking System</a></p>
          <p><a href="#possibility">Transaction History</a></p>
          <p><a href="#blog">About Us</a></p>
          <p><a href="#down">Contact Us</a></p>
          </div>
          <div className="temple__navbar-sign">
        <button type="button">Logout</button>
      </div>
          </div>         
    </div>
  );
};

export default Article;

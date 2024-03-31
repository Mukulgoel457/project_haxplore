import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/som.jpg';
import './header.css';

const Header = () => (
  <div className="temple__header section__padding" id="home">
    <div className="temple__header-content">
      <h1 className="gradient__text">Somnath: Sanctuary of Resurgence</h1>
      <p>The Somnath Temple, revered as one of the most significant and 
        sacred pilgrimage sites in Hinduism, is an emblem of faith and 
        spirituality located on the western coast of Gujarat, India. 
        According to Hindu tradition, it is the first among the twelve 
        Jyotirlinga shrines of Shiva, where each linga represents the 
        radiant sign of the Lord.</p>
      <div className="temple__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="temple__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;

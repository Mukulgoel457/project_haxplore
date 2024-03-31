import React from 'react';
import './features.css';

const Features= ({ imgUrl, date, text }) => (
  <div className="temple__blog-container_article">
    <div className="temple__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="temple__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p></p>
    </div>
  </div>
);

export default Features;

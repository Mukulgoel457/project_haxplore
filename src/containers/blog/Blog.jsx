import React from 'react';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';
import Features from '../features/Features';


const Blog = () => (
  <div className="temple__blog section__padding" id="blog">
    <div className="temple__blog-heading">
      <h1 className="gradient__text">Let's embrace the almighty, <br /> We are blogging about it.</h1>
    </div>
    <div className="temple__blog-container">
      <div className="temple__blog-container_groupA">
        <Features imgUrl={blog01} date="Sep XX, 20XX" text="A Divine Ensemble: Grace and Grandeur at the Abode of the Gods"
/>
      </div>
      <div className="temple__blog-container_groupB">
        <Features imgUrl={blog02} date="Aug XX, 20XX" text="Illuminated Elegance: A Nighttime Ode to Spiritual Splendor" />
        <Features imgUrl={blog03} date="May XX, 20XX" text="69th anniversary of Pran Pratishtha of Somnath Mandir marked!" />
        <Features imgUrl={blog04} date="Dec XX, 20XX" text="Architectural Majesty: Corridor of Intricate Splendors" />
        <Features imgUrl={blog05} date="Jan XX, 20XX" text="Sanctuary by the Sea: Harmony of Nature and Devotion" />
      </div>
    </div>
  </div>
);

export default Blog;

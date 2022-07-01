import React from 'react';
import Article from '../../Components/Article/Article';
import { blog01, blog02, blog03, blog04 } from './imports';
import './Templates.css';

const template = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">VIEW SIMILAR TEMPLATES TO MULTOR</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_group">
        <Article imgUrl={blog01} title="Basique" text="A simple SaaS click-through template that checks all the boxes: unique selling proposition, hero shot, benefits, social proof, and call-to-action."/>
        <Article imgUrl={blog02} title="Horizons" text="This quick start template is great for capturing leads with any offer, whether it’s a webinar, ebook, or promotional coupon."  />
        <Article imgUrl={blog03} title="CROBook" text="Highlight your hottest content with this lead gen popup, complete with a built-in mobile device frame for your imagery."/>
        <Article imgUrl={blog04} title="Saasy List" text="Use this spacious popup template to provide prospects with plenty of context that will convince them to click and convert." />
      </div>
    </div>
  </div>
);

export default template;
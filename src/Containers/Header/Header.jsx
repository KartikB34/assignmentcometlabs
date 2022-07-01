import React from 'react';
import './Header.css';

import people from '../../Assets/people.png';

const Explore = () => (
  <>
  <span className="preview-category"> <a href="#Consulting">Consulting</a> </span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Ecourse">Ecourse</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Events">Events</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Featured">Featured</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Health">Health</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Landing">Landing Pages</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Lead">Lead Generation</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Medical">Medical</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Webinar">Webinar</a></span>
  <span className="split-dot"> | </span>
  <span className="preview-category"><a href="#Webpages">Webpages</a></span>
  </>
)

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">

        <h1 className="gradient__text">MULTOR Heading</h1>
        <p>Schedule more virtual appointments, online classes, and video consultations with this high-converting lead capture template.</p>
        
        <div className="gpt3__header-content__input">
          <button type='button'>MAKE IT YOURS</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last week</p>
        </div>

      </div>
      
      <div className="gpt3__header-content__category">
          <h2>Category</h2>
          <div className="gpt3__header-content_category-explore">
            <Explore />
          </div>
      </div>

    </div>
  )
}

export default Header
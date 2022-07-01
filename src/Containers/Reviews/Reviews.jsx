import React from 'react';
import './Reviews.css';

import manos from '../../Assets/masteroogway.jpg';
import tobey from '../../Assets/tobey.jpg';

const Reviews = () => {
  return (
    <div className='review__section section__padding'>
      <h1 className='gradient__text'>DON'T JUST TAKE OUR WORD FOR IT</h1>
      <div className='review__section-reviews'>

        <div className='review__section-review_testimonial'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. </p>
          <div className='review__section-image'>
            <img src={tobey} alt="ManOne" />
            <p>Otto Octavius</p>
          </div>
        </div>

        <div className='review__section-review_testimonial'>
        <p>There are no accidents! easy it was to sign up and participate.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do. </p>
          <div className='review__section-image'>
            <img src={manos} alt="ManTwo" />
            <p>Master Oogway</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Reviews
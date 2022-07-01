import React from 'react'
import './Features.css'

import imageone from '../../Assets/featureone.jpg';
import imagetwo from '../../Assets/featuretwo.jpg';
import imagethree from '../../Assets/featurethree.jpg';

const Features = () => {
  return (
    <div className='features section__padding'>

      <h1 className='gradient__text'>FEATURES</h1>

      <div className='features__features'>

      <div className='features__feature'>
        <img src={imageone} alt="Feature 1"/>
        <h2>FEATURE 1</h2>
        <p>Talk about some of the details of your offer with a focus on the value people get back.</p>
      </div>

      <div className='features__feature section__padding'>
        <img src={imagetwo} alt="Feature 2"/>
        <h2>FEATURE 2</h2>
        <p>Is there a pain point that your service resolves? Tell visitors about it here.</p>
      </div>

      <div className='features__feature'>
        <img src={imagethree} alt="Feature 3"/>
        <h2>FEATURE 3</h2>
        <p>Alternatively, you could use this section to address some frequently asked questions.</p>
      </div>

      </div>

    </div>
  )
}

export default Features
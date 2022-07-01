import React from 'react'
import './Blog.css'

import about from '../../Assets/about.jpg';

const Blog = () => {
  return (
    <div  className='about section__padding'>
      <div>
        <img src={about} alt='about'/>
      </div>
      <div className='about__content'>
        <h2 className='gradient__text'>About</h2>
        <h1>Some more information about your business</h1>
        <p>Share a little about yourself as a business owner, or maybe describe what makes your service unique. Give visitors one more reason to care about your offer and want to work with you.</p>
      </div>
    </div>
  )
}

export default Blog
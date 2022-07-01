import React from 'react';
import './Footer.css';
import gpt3Logo from '../../Assets/logo.svg';
import twitter from '../../Assets/twitter.png';
import linkedin from '../../Assets/linkedin.png';
import instagram from '../../Assets/instagram.png';
import youtube from '../../Assets/youtube.png';

const Footer = () => {
  return (
    <div className="gpt3__footer section_padding">

      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'></h1>
      </div>

      <div className='gpt3__footer-links_logo'>
        <img src={gpt3Logo} alt='logo' />
      </div>

      <div className='gpt3__footer-links'>

        <div className='gpt3__footer-links_div'>
          <h4>Product</h4>
          <p>Smart Builder</p>
          <p>Preview Smart Builder</p>
          <p>Smart Traffic</p>
          <p>Smart Copy</p>
          <p>Unbounce Apps</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Solutions</h4>
          <p>Ecommerce</p>
          <p>SaaS</p>
          <p>Agency</p>
          <p>Small Businesses</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>About Unbounce</p>
          <p>Partner Program</p>
          <p>Careers</p>
          <p>Smart Copy</p>
          <p>Integrate with Us</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in Touch</h4>
          <p>Contact</p>
          <p>Demo</p>
          <p>Log In</p>
          <p>Help Center</p>
          <p>Community</p>
        </div>

      </div>

      <div className='gpt3__footer-copyright'>
        <p>© 2010-2021 Unbounce. All rights reserved.</p>

        <div className='gpt3__footer-ending'>
          <div className='gpt3__footer-ending_security'>
            <span className="preview-category"> <a href="#Security">Security</a> </span>
            <span className="preview-category"> <a href="#Privacy policy">Privacy policy</a> </span>
            <span className="preview-category"> <a href="#Terms of services">Terms of services</a> </span>
          </div>
          <div className='gpt3__footer-ending_logos'>
           <img src={twitter} alt='twitter' />
           <img src={linkedin} alt='linkedin'/>
           <img src={instagram} alt='instagram'/>
           <img src={youtube} alt='youtube'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
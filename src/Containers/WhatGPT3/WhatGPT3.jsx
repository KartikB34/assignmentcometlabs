import React from 'react';
import './WhatGPT3.css';
//import ReactPlayer from 'react-player';

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <h1 className="gradient__text">Show visitors what they're signing up for</h1>
      <p>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
      <div className='responsive'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Xoz31I1FuiY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default WhatGPT3
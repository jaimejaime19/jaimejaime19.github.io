import React from 'react';
import accomplishImage from '../../assets/arizona-state-university-logo-vertical.png';
import './accomplish.css';

const Accomplish = () => {
  return (
    <div className='my__accomplish section__padding' id="education">
      <div className='my__accomplish-image'>
        <img src={accomplishImage} alt='accomplish'/>
      </div>
      <div className='my__accomplish-content'>
        <h4>Education</h4>
        <h1 className='gradient__text'>ASU Graduate</h1>
        <p>I attended Arizona State University and earned by Bachelor's in Computer Science. I consider this to be one of my biggest accomplishments - college has opened up many opportunities for me. I see my future career in software and technology related fields.</p>
        <h4>BS Computer Science, 3.7 GPA</h4>
      </div>
    </div>
  )
}

export default Accomplish

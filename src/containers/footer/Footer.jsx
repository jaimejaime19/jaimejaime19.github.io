import React from 'react';
import './footer.css';
import justalogo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='my__footer section__padding'>
        <div className='my__footer-heading'>
          <h1 className='gradient__text'>Thanks for Visiting!</h1>
        </div>
        <div className='my__footer-btn'>
          <p>Tell me more!</p>
        </div>
        <div className='my__footer-links'>
          <div className='my__footer-links__logo'>
            <img src={justalogo} alt='logo'/>
            <p>Text Text Text</p>
          </div>

          <div className='my__footer-links__div'>
             <h4>Links1</h4>
             <p>L1</p>
             <p>L2</p>
             <p>L3</p>
          </div>
          <div className='my__footer-links__div'>
             <h4>Links2</h4>
             <p>L1</p>
             <p>L2</p>
             <p>L3</p>
          </div>
          <div className='my__footer-links__div'>
             <h4>Links3</h4>
             <p>L1</p>
             <p>L2</p>
             <p>L3</p>
          </div>
        </div>
        <div className='my__footer-copyright'>
          <p>2024 Jaime Cortez. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer

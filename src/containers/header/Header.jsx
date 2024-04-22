import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import bigpic from '../../assets/logo512.png'

const Header = () => {
  return (
    <div className='my__header section__padding' id="home">
        <div className='my__header-content'>
          <h1 className='gradient__text'>Welcome to the Website of Jaime!</h1>
          <p> This website was made using ReactJS. Extensive use of HTML, CSS, and Javascript makes this site look excellent (and mobile responsive)!</p>
          <div className='my__header-content__input'>
            <input type='email' placeholder='Your Email Here (WIP)' title='Email functionality WIP'></input>
            <button type='button' title='Email functionality WIP'>Get Started!</button>
          </div>

          <div className='my__header-content__people'>
            <img src={people} alt='people'/>
            <p>Enter your email for the latest updates!</p>
          </div>
        </div>
        
        <div className='my__header-image'>
            <img src={bigpic} alt='bigpic'/>
          </div>
    </div>
  )
}

export default Header

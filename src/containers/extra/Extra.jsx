import React from 'react';
import './extra.css';
import Feature from '../../components/feature/Feature';

const extraData = [
  {
    title: 'Silicon Valley Bank',
    text: 'I worked in a team of 5 to develop machine learning models. These models predicted stock and ETF prices using historical data and technical indicators. Our first big model managed to help us earn an 83% return on investment!'
  },
  {
    title: 'Godot Game Development',
    text: 'I developed a game by myself using the Godot Engine. Some things I learned included design patterns, component-based design, and game development flow. I published it on itch.io, you can play the game using the following link: https://jaimejaime19.itch.io/player-tower-defense'
  },
  {
    title: 'React Website',
    text: 'This website is something I have worked on for a while. Using Youtube, Google, and previous experiences, I was able to make this website look awesome and showcase the best of my abilities.'
  },
  {
    title: 'Car Wash',
    text: 'I have worked at a car wash for 4 years since high school. While many disregard irrelevant experience, I put this here so my dedication to businesses is displayed to everyone.'
  }
]

const Extra = () => {
  return (
    <div className='my__extra section__padding' id='experience'>
      <div className='my__extra-heading'>
        <h1 className='gradient__text'>
          Work experience, and projects I have worked on.
        </h1>
        <p>
        All impressive!
        </p>
      </div>
      <div className='my__extra-container'>
        {extraData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Extra

import React from 'react';
import './whoami.css';
import Feature from '../../components/feature/Feature';

const Whoami = () => {
  return (
    <div className='my__whoami section__margin' id='whoami'>
      <div className='my__whoami-feature'>
        <Feature title='Brilliant Team Player' text='As a dedicated team player, I prioritize collaboration and communication to achieve the best results for software applications. I actively listen to others, encourage diverse perspectives, seek input from all team members, and treat every team member equally. My ability to adapt and take on different roles within the team ensures that everyone can focus on their strengths, and leave no holes in the team. I foster a positive and inclusive team environment where everyone interacts and feels motivated to do so.'/>
      </div>
      <div className='my__whoami-heading'>
        <h1 className='gradient__text'>
          What do I offer as a team member?
        </h1>
        <p>My qualities</p>
      </div>
      <div className='my__whoami-container'>
        <Feature title='Fast Learner' text='I excel in environments where learning new technologies is a necessity, especially in the ever-evolving software world. My ability to integrate and apply new information to a software product makes me a flexible learner and team member, filling up any knowledge vacancies in the team.'/>
        <Feature title='Strategic Implementations' text='I prefer to tackle any software development strategically. Beginning from the planning, implementing, and development stages all the way to deployment, every phase is reviewed with a detail-oriented approach for the best of work. Any deviations are fixed for the better of the application.'/>
        <Feature title='Organization and Documentation' text='There is nothing better that describes disorganization than software development. I strive to keep software well documented and organized to ensure that current and future team members can understand each component in the application.'/>
      </div>
    </div>
  )
}

export default Whoami

import './About.sass'
import React, {useEffect} from 'react'
import Context from './Context'
import profile from './img/profilepic.jpg'
import email from './img/email.png'
import facebook from './img/facebook.png'
import linkedin from './img/linkedin.png'
import github from './img/github.png'

const classToggle = () => {
  document.querySelector('#foot').classList.toggle('fontcolor')
}

const openLink = (e) => {
  if (e.target.id === 'linkedin') window.open('https://www.linkedin.com/in/wojciech-fydrych-26153919a/', '_blank')
  else if (e.target.id === 'facebook') window.open('https://web.facebook.com/lewy.stefan/', '_blank')
  else if (e.target.id === 'github') window.open('https://github.com/wfydrych', '_blank')
  else if (e.target.id === 'email') window.open('mailto:wfydrych@gmail.com')
}

const selectMenuColor = () => {
  document.getElementById('about').style.color = '#6d6d6d'
  document.getElementById('technologies').style.color = '#dddddd'
  document.getElementById('projects').style.color = '#dddddd'
}

export default function About() {
  useEffect( () => {
    const blinkFunction = setInterval(classToggle,500)
    selectMenuColor()
    
    return () => {
      clearInterval(blinkFunction)
    }
  })
  
  return (
    <Context.Consumer>
    { (context) => (
      <div className='about'>
          <div className='about__intro'>
              <img alt='profile-pic' src={profile} className='about__intro__pic'/>
              <div className='about__intro__name'>Wojciech Fydrych</div>
              <div className='about__intro__profession'>Front-End Developer<span id="foot" className="fontcolor">_</span></div>
          </div>
          <div className='about__content'>
              <div className='about__content__text'>
                  <div className='about__content__text__title'>
                    {context.menu[0]}
                  </div>
                  <div className='about__content__text__description'>
                    {context.description}
                  </div>
              </div>
              <div className='about__content__contact'>
                <div className='about__content__contact__title'>
                    {context.contact}
                  </div>
                  <div className='about__content__contact__description'>
                    <div className='about__content__contact__description__info' id='linkedin' onClick={openLink}><img alt='linkedIn' src={linkedin} /> LinkedIn
                    </div>
                    <div className='about__content__contact__description__info' id='email' onClick={openLink}>
                      <img alt='email' src={email} /> Email
                    </div>
                    <div className='about__content__contact__description__info' id='github' onClick={openLink}>
                      <img alt='github' src={github} /> GitHub
                    </div>
                    <div className='about__content__contact__description__info' id='facebook' onClick={openLink}>
                      <img alt='facebook' src={facebook} /> Facebook
                    </div>
                  </div>
              </div>
          </div>
      </div>
    )}
    </Context.Consumer>
  )
}
import './About.sass'
import React, {useEffect} from 'react'
import profile from './img/profilepic.png'
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

export default function About() {
  useEffect( () => {
    const blinkFunction = setInterval(classToggle,500)
    return () => {
      clearInterval(blinkFunction)
    }
  })
  
  return (
    <div className='about'>
        <div className='about__intro'>
            <img alt='profile-pic' src={profile} className='about__intro__pic'/>
            <div className='about__intro__name'>Wojciech Fydrych</div>
            <div className='about__intro__profession'>Front-End Developer<span id="foot" className="fontcolor">_</span></div>
        </div>
        <div className='about__content'>
            <div className='about__content__text'>
                <div className='about__content__text__title'>
                  About me
                </div>
                <div className='about__content__text__description'>
                  Hey there! I am a junior web-developer, starting my journey with programming. 
                  On that website you can find my last projects and technologies which I use. 
                  I'm learning new things all the time and right now focusing on back-end technologies. 
                  In case you would see me in your team or have any task for me to do, feel free to contact.
                </div>
            </div>
            <div className='about__content__contact'>
              <div className='about__content__contact__title'>
                  Contact
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
  );
}
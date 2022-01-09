import './Projects.sass'
import Context from './Context'
import React, {useEffect} from 'react'
import weather from './img/projects/weather.jpg'
import habit from './img/projects/habit.jpg'
import todo from './img/projects/todo.jpg'
import krzys from './img/projects/krzys.jpg'
import pavel from './img/projects/pavelmiguel.jpg'
import carshine from './img/projects/carshine.jpg'

const selectMenuColor = () => {
  if (window.innerWidth > 800) {
    document.getElementById('about').style.color = '#dddddd'
    document.getElementById('technologies').style.color = '#dddddd'
    document.getElementById('projects').style.color = '#6d6d6d'
  }
}

export default function Projects() {
  useEffect( () => {
    selectMenuColor()
    
    return () => {}
  })

  return (
    <Context.Consumer>
    { (context) => (
      <div className='projects'>
          <div className='projects__title'>{context.project}</div>
          <div className='projects__container'>
            <div className='projects__container__project'>
              <a target="_blank" rel="noreferrer" href="https://shinefactorych.com"><img alt='shine-factory' src={carshine} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>ShineFactory</span>
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" rel="noreferrer" href="http://appriority.online/"><img alt='APPriority' src={todo} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>APPriority (mobile app)</span>
              </div>
            </div>
            <div className='projects__container__project'>
            <a target="_blank" rel="noreferrer" href="https://habit-tracker-mobile.herokuapp.com/"><img alt='HabitTracker' src={habit} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Habit Tracker</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" rel="noreferrer" href="https://wfydrych.github.io/pavelmiguel/"><img alt='portfolio-pavel-miguel' src={pavel} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Portfolio Pavel Miguel</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" rel="noreferrer" href="https://guarded-fortress-34922.herokuapp.com/"><img alt='portfolio-kristoff' src={krzys} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Portfolio Krzysztof Jakubiak</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" rel="noreferrer" href="https://wfydrych.github.io/WeatherApp/"><img alt='weather-app' src={weather} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Weather App</span>
                
              </div>
            </div>
          </div>
      </div>
    )}
    </Context.Consumer>
  )
}
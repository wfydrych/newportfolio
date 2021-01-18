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
  document.getElementById('about').style.color = '#dddddd'
  document.getElementById('technologies').style.color = '#dddddd'
  document.getElementById('projects').style.color = '#6d6d6d'
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
              <a target="_blank" href="https://wfydrych.github.io/carshine/"><img alt='car-shine-factory' src={carshine} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Car Shine Factory</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" href="https://wfydrych.github.io/pavelmiguel/"><img alt='portfolio-pavel-miguel' src={pavel} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Portfolio Pavel Miguel</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" href="https://guarded-fortress-34922.herokuapp.com/"><img alt='portfolio-kristoff' src={krzys} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>Portfolio Krzysztof Jakubiak</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <img alt='HabitTracker' src={habit} className='projects__container__project__pic' />
              <div className='projects__container__project__description'>
                <span>Habit Tracker</span>
                  (in progress)
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" href="https://to-do-list-mobile.herokuapp.com/"><img alt='ToDoApp' src={todo} className='projects__container__project__pic' /></a>
              <div className='projects__container__project__description'>
                <span>To Do App</span>
              </div>
            </div>
            <div className='projects__container__project'>
              <a target="_blank" href="https://wfydrych.github.io/WeatherApp/"><img alt='weather-app' src={weather} className='projects__container__project__pic' /></a>
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
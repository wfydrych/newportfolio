import './Projects.sass'
import weather from './img/projects/weather.png'
import habit from './img/projects/habit.png'
import todo from './img/projects/todo.png'
import krzys from './img/projects/krzys.png'
import pavel from './img/projects/pavelmiguel.png'
import carshine from './img/projects/carshine.png'

export default function Projects() {
  return (
    <div className='projects'>
        <div className='projects__title'>My projects</div>
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
              <span>Portfolio</span>
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
  );
}
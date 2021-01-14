import './Projects.sass'
import weather from './img/projects/weather.png'
import habit from './img/projects/habit.png'
import todo from './img/projects/todo.png'
import krzys from './img/projects/krzys.png'

export default function Projects() {
  return (
    <div className='projects'>
        <div className='projects__title'>My projects</div>
        <div className='projects__container'>
          <div className='projects__container__project'>
            <img alt='portfolio-kristoff' src={krzys} className='projects__container__project__pic' />
            <div className='projects__container__project__description'>
              <span>Portfolio</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eros commodo, sollicitudin tortor nec, 
            </div>
          </div>
          <div className='projects__container__project'>
            <img alt='HabitTracker' src={habit} className='projects__container__project__pic' />
            <div className='projects__container__project__description'>
              <span>Habit Tracker</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eros commodo, sollicitudin tortor nec, 
            </div>
          </div>
          <div className='projects__container__project'>
            <img alt='ToDoApp' src={todo} className='projects__container__project__pic' />
            <div className='projects__container__project__description'>
              <span>To Do App</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eros commodo, sollicitudin tortor nec, 
            </div>
          </div>
          <div className='projects__container__project'>
            <img alt='weather-app' src={weather} className='projects__container__project__pic' />
            <div className='projects__container__project__description'>
              <span>Weather App</span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id eros commodo, sollicitudin tortor nec, 
            </div>
          </div>
        </div>
    </div>
  );
}
import './Technologies.sass'
import React, {useEffect} from 'react'
import Context from './Context'

const selectMenuColor = () => {
  if (window.innerWidth > 800) {
    document.getElementById('about').style.color = '#dddddd'
    document.getElementById('technologies').style.color = '#6d6d6d'
    document.getElementById('projects').style.color = '#dddddd'
  }
}

export default function Technologies() {
  useEffect( () => {
    const skills = [100, 95, 95, 90, 90, 80, 90, 80, 80, 70, 30, 25, 80, 70, 50, 50, 30, 40, 50, 75, 80, 60]
    const list = [...document.querySelectorAll('.fillBar')]
    list.map((div, index) => {
      let i = 0
        if (i === 0) {
          i = 1;
          let width = 1;
          let id = setInterval(frame, 10);
          function frame() {
            if (width >= skills[index]) {
              clearInterval(id);
              i = 0;
            } else {
              width++
              div.style.width = width + '%'
            }
          }
        }
    })
    selectMenuColor()
  })

  return (
    <Context.Consumer>
    { (context) => (
      <div className='technologies'>
          <div className='technologies__title'>{context.menu[1]}</div>
          <div className='technologies__container'>
              <span >HTML5<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >BEM<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >CSS3<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Sass<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Flexbox<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >CSS Grid<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Bootstrap 4<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >JavaScript<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >TypeScript<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >jQuery<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >GSAP<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Canvas<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >React<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >React Router<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >React Hooks<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Redux<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Node.js<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Express<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >MongoDB<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Cypress<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Git<div className='progressBar'><div className='fillBar'></div></div></span>
              <span >Figma<div className='progressBar'><div className='fillBar'></div></div></span>
          </div>
      </div>
    )}
    </Context.Consumer>
  )
}
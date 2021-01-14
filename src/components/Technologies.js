import './Technologies.sass'
import React, {useEffect} from 'react'

export default function Technologies() {
  useEffect( () => {
    const skills = [100, 95, 95, 90, 90, 80, 90, 80, 70, 80, 70, 50, 30, 40, 50, 80, 60]
    const list = [...document.querySelectorAll('.fillBar')]
    list.map((div, index) => {
      div.style.width = skills[index] + '%'
    })
  })

  return (
    <div className='technologies'>
        <div className='technologies__title'>Technologies</div>
        <div className='technologies__container'>
            <span >HTML5<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >BEM<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >CSS3<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Sass<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Flexbox<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >CSS Grid<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Bootstrap<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >JavaScript<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >jQuery<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >React<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >React Router<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >React Hooks<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Node.js<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Express<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >MongoDB<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Git<div className='progressBar'><div className='fillBar'></div></div></span>
            <span >Figma<div className='progressBar'><div className='fillBar'></div></div></span>
        </div>
    </div>
  )
}
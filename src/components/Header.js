import './Header.sass'
import React from 'react'
import {NavLink} from 'react-router-dom'
import pol from './img/flags/PL-flag.gif'
import eng from './img/flags/UK-flag.gif'
import ger from './img/flags/GM-flag.gif'

export default function Header() {
  return (
    <div className='header'>
        <div className='header__flags'>
            <img alt='pl' src={pol} className='header__flags__flag' />
            <img alt='de' src={ger} className='header__flags__flag' />
            <img alt='en' src={eng} className='header__flags__flag' />
        </div>
        <div className='header__menubar'>
            <NavLink to='/about'><div className='header__menubar__menu'>About me</div></NavLink>
            <NavLink to='/technologies'><div className='header__menubar__menu'>Technologies</div></NavLink>
            <NavLink to='/projects'><div className='header__menubar__menu'>Projects</div></NavLink>
        </div>
    </div>
  );
}
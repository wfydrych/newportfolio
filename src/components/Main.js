import './Main.sass'
import About from './About'
import Technologies from './Technologies'
import Projects from './Projects'
import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AnimatedSwitch} from 'react-router-transition'

export default function Main() {
  return (
    <div className='main'>
        <Switch>
            <AnimatedSwitch
                atEnter={{ opacity: 0 }}
                atLeave={{ opacity: 0 }}
                atActive={{ opacity: 1 }}
                className="switch-wrapper"
            >
                <Route 
                    exact path='/' 
                    render = {text => <About></About>}>
                </Route>
                <Route 
                    path='/about' 
                    render = {text => <About></About>}>
                </Route>
                <Route 
                    path='/technologies' 
                    render = {text => <Technologies></Technologies>}>
                </Route>
                <Route 
                    path='/projects' 
                    render = {text => <Projects></Projects>}>
                </Route>
            </AnimatedSwitch>
        </Switch>
    </div>
  );
}

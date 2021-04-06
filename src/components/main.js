import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './home';
import Gradingpolicy from './gradingpolicy';
import Grades from './grades';
import MentorEvent from './MentorEvent';

const Main = () => (
    <Switch>
        <Route path = "/home" component ={Home}/>
        <Route path = "/MentorEvent" component ={MentorEvent}/>
        <Route path = "/gradingpolicy" component ={Gradingpolicy}/>
        <Route path = "/grades" component ={Grades}/>
        
    </Switch>
)

export default Main;
import React from 'react';
import LandingPage from './landingpage';
import Project from './project';
import Resume from './resume';
import Contact from './contact';
import {Switch, Route} from 'react-router-dom'


const Main = () => (
    <Switch>
        <Route exact path="/deploy-react" component= {LandingPage} />
        <Route path="/resume" component = {Resume} />
        <Route path="/project" component = {Project} />
        <Route path="/contact" component = {Contact} />


    </Switch>
)

export default Main;
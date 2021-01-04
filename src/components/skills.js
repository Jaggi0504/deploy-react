import React from 'react';
import { Grid, Cell } from 'react-mdl'
import '../App.css';

class Skills extends React.Component {
    render() {
        return (

            <Grid>
                <Cell col={3}>
                    <ul className = "skills-frontend">
                        <li> <h4 className="skills-style"> HTML</h4> </li>
                        <li> <h4  className="skills-style"> CSS </h4></li>
                        <li> <h4  className="skills-style"> Bootstrap </h4> </li>
                        <li> <h4  className="skills-style"> JavaScript </h4> </li>
                        <li> <h4  className="skills-style"> React.js </h4></li>
                        <li> <h4  className="skills-style"> JQuery </h4></li>

                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul className = "skills-backend">
                        <li> <h4 className="skills-style"> PHP </h4> </li>
                        <li> <h4 className="skills-style"> Node.js </h4> </li>
                        <li> <h4 className="skills-style"> Express.js </h4> </li>
                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul className = "skills-database">
                        <li> <h4 className="skills-style"> SQL </h4> </li>
                        <li> <h4 className="skills-style"> MonogDB </h4> </li>
                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul className = "skills-language">
                        <li> <h4 className="skills-style"> C++ </h4> </li>
                        <li> <h4 className="skills-style"> Java </h4> </li>
                        <li> <h4 className="skills-style"> Data Structures </h4> </li>
                        <li> <h4 className="skills-style"> Algorithms </h4> </li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}


export default Skills;
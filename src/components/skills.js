import React from 'react';
import { Grid, Cell } from 'react-mdl'

class Skills extends React.Component {
    render() {
        return (

            <Grid>
                <Cell col={3}>
                    <ul>
                        <li> <h4> HTML</h4> </li>
                        <li> <h4> CSS </h4></li>
                        <li> <h4> Bootstrap </h4> </li>
                        <li> <h4> JavaScript </h4> </li>
                        <li> <h4> React.js </h4></li>
                        <li> <h4> JQuery </h4></li>

                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul>
                        <li> <h4 >PHP </h4> </li>
                        <li> <h4> Node.js </h4> </li>
                        <li> <h4> Express.js </h4> </li>
                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul>
                        <li> <h4> SQL </h4> </li>
                        <li> <h4> MonogDB </h4> </li>
                    </ul>
                </Cell>
                <Cell col={3}>
                    <ul>
                        <li> <h4> C++ </h4> </li>
                        <li> <h4> Java </h4> </li>
                        <li> <h4> Data Structures </h4> </li>
                        <li> <h4> Algorithms </h4> </li>
                    </ul>
                </Cell>
            </Grid>
        )
    }
}


export default Skills;
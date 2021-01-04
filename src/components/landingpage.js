import React from 'react';
import { Grid, Cell } from 'react-mdl'
import Project from './project';

class Landing extends React.Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto" }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://res.cloudinary.com/jagdeepsingh/image/upload/v1600591294/eenv19xwp8sudt2p4gcr.jpg"
                            alt="image"
                            className="jagdeep-image"
                        />
                        <div className="banner-text">
                            <h1 className = "landing-title"> Full-Stack Web Developer </h1>
                            <hr />
                            <p>HTML| CSS | Bootstrap | JavaScript | PHP | Node.js | Express.js | React.js | SQL | Mongodb | C++ | Data Structures and Algorithms | Java </p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/jagdeep-singh-2b07a7149" target="_blank">
                                    <i className="fab fa-linkedin-square"/>
                                </a>
                                <a href="https://github.com/Jaggi0504" target="_blank">
                                    <i className="fab fa-github-square"/>
                                </a>
                                <a href="https://www.instagram.com/jjaaaggddeeepp/?hl=en" target="_blank">
                                    <i className="fab fa-instagram"/>
                                </a>
                                <a href="https://www.facebook.com/kinghofsingh.jagdeep/" target="_blank">
                                    <i className="fab fa-facebook-square"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
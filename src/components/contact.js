import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                        <Cell col={6}>
                            <h2 className="contact-name" style={{ fontFamily: 'Kaushan Script, cursive', marginLeft:"40px" }}> Jagdeep Singh </h2>
                            <div className="contact-image">
                            <img src="https://res.cloudinary.com/jagdeepsingh/image/upload/v1600591294/eenv19xwp8sudt2p4gcr.jpg"
                                alt="image"
                                style={{ height: '380px', width: '350px', borderRadius: '25px' }} className="contact-img"
                            />
                            </div>
                        </Cell>
                    <Cell col={6}>
                        <h2 className="contact-contact" style={{ fontFamily: 'Kaushan Script, cursive' }}>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square contact-phone" />
                                        <div className="contactContact">
                                            (+91) 8755160544
                                    </div>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope-square contact-email" />
                                        <div className="contactEmail">
                                            singh.jagdeep0504@gmail.com
                                    </div>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <a href="https://github.com/Jaggi0504" target="_blank">
                                            <i className="fab fa-github-square contact-github" />
                                        </a>
                                        <div className="contactGithub">
                                        https://github.com/Jaggi0504
                                       </div>
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '20px', fontFamily: 'Anton' }}>
                                        <a href="https://www.linkedin.com/in/jagdeep-singh-2b07a7149" target="_blank">
                                            <i className="fab fa-linkedin-square contact-linkedin" />
                                        </a>
                                        <div className="contactLinkedin">
                                        https://www.linkedin.com/in/jagdeep-singh-2b07a7149/
                                        </div>
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;
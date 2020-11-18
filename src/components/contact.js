import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'


class Contact extends React.Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2 style={{ fontFamily: 'Kaushan Script, cursive' }}> Jagdeep Singh </h2>
                        <img src="https://res.cloudinary.com/jagdeepsingh/image/upload/v1600591294/eenv19xwp8sudt2p4gcr.jpg"
                            alt="image"
                            style={{ height: '380px', wdith: '350px', borderRadius: '25px' }} className="contact-img"
                        />
                    </Cell>
                    <Cell col={6}>
                        <h2 style={{ fontFamily: 'Kaushan Script, cursive' }}>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                    (+91) 8755160544
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope-square" aria-hidden="true" />
                                    singh.jagdeep0504@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <a href="https://github.com/Jaggi0504" target="_blank">
                                            <i className="fab fa-github-square" aria-hidden="true" />
                                        </a>
                                       Github Account
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <a href="https://www.linkedin.com/in/jagdeep-singh-2b07a7149" target="_blank">
                                            <i className="fab fa-linkedin-square" aria-hidden="true" />
                                        </a>
                                        Linkedin Profile
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
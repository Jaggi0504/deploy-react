import React from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Achievements from './achievements'
import Skills from './skills';

class Resume extends React.Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://res.cloudinary.com/jagdeepsingh/image/upload/v1600591294/eenv19xwp8sudt2p4gcr.jpg"
                                alt="image"
                                style={{
                                    height: '250px',
                                    width: '250px',
                                    borderRadius: '50%'
                                }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '1em' }}>Jagdeep Singh</h2>
                        <h4 stlye={{ color: 'grey' }}>Programmer </h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px' }}>
                            As a self-motivated person, I seek to work in a professional environment where high quality work
                            and problem solving skills are well appreciated. I look forward to work in challengin roles which
                            enable me to use my skills and contribute towards the success of the organization. </p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2> Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2021}
                            schoolName="Guru Tegh Bahadur Institute of Technology"
                            schoolCity="Hari Nagar, Delhi"
                        />
                        <Education
                            startYear={2015}
                            endYear={2016}
                            schoolName="Bishop Conrad School"
                            schoolCity="Bareilly, Uttar Predesh"
                        />
                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="Bishop Conrad School"
                            schoolCity="Bareilly, Uttar Predesh"
                        />
                        <hr style={{ borderTop: '3px solid #fc0824' }} />
                        <h2> Achievements </h2>
                        <Achievements
                            courseName="Introduction to C++"
                            startYear={2021}
                            endYear={2021}
                            schoolName="Coding Ninjas"
                            schoolCity="Scored 94%"
                        />
                        <Achievements
                            courseName="Data Structures and Algorithms"
                            startYear={2021}
                            endYear={2021}
                            schoolName="Coding Ninjas"
                            schoolCity="Scored 92%"
                        />
                        <Achievements
                            courseName="OCAJP"
                            startYear={2018}
                            endYear={2018}
                            schoolName="SCTPL"
                            schoolCity="Scored 100%"
                        />
                        <Achievements
                            courseName="PHP"
                            startYear={2019}
                            endYear={2019}
                            schoolName="SSDN"
                            schoolCity="Secured 'A' grade"
                        />
                        <hr style={{ borderTop: '3px solid #fc0824' }} />
                        <h2> Skills </h2>
                        <Skills />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
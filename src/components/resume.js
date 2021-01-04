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
                                className = "jagdeep-resumeImage"
                                style={{
                                    height: '250px',
                                    width: '250px',
                                    borderRadius: '50%'
                                }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '1em' }} className="resume-name">Jagdeep Singh</h2>
                        <h4 stlye={{ color: 'grey' }} className="resume-type">Programmer </h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} className="resume-hr" />
                        <p style={{ fontFamily: 'Barlow Condensed, sans-serif', fontSize: '22px' }} className="resume-aboutJagdeep">
                            As a self-motivated person, I seek to work in a professional environment where high quality work
                            and problem solving skills are well appreciated. I look forward to work in challenging roles which
                            enable me to use my skills and contribute towards the success of the organization. </p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2 className = "resume-education"> Education</h2>
                        <Education
                            startYear={2017}
                            endYear={2021}
                            schoolName="Guru Tegh Bahadur Institute of Technology"
                            schoolCity="Hari Nagar, Delhi"
                            percentage="8.2/10"
                        />
                        <Education
                            startYear={2015}
                            endYear={2016}
                            schoolName="Bishop Conrad School (XII)"
                            schoolCity="Bareilly, Uttar Predesh"
                            percentage="85.4/100"
                        />
                        <Education
                            startYear={2013}
                            endYear={2014}
                            schoolName="Bishop Conrad School (X)"
                            schoolCity="Bareilly, Uttar Predesh"
                            percentage="8.4/10"
                        />
                        <hr style={{ borderTop: '3px solid #fc0824' }} />
                        <h2 className = "resume-achievements"> Achievements </h2>
                        <Achievements
                            courseName="Introduction to C++"
                            startYear="06/04/21"
                            endYear="25/05/21"
                            schoolName="Coding Ninjas"
                            percentage="94%"
                        />
                        <Achievements
                            courseName="Data Structures and Algorithms"
                            startYear="26/05/21"
                            endYear="30/09/21"
                            schoolName="Coding Ninjas"
                            percentage="92%"
                        />
                        <Achievements
                            courseName="OCAJP"
                            startYear="06/06/18"
                            endYear="06/07/18"
                            schoolName="SCTPL"
                            percentage="100%"
                        />
                        <Achievements
                            courseName="PHP"
                            startYear="10/06/19"
                            endYear="03/07/19"
                            schoolName="SSDN Technologies"
                            percentage="'A' Grade"
                        />
                        <Achievements
                            courseName="React"
                            startYear="05/06/21"
                            endYear="20/07/21"
                            schoolName="SSDN Technologies"
                            
                        />
                        <hr style={{ borderTop: '3px solid #fc0824' }} />
                        <h2 className = "resume-skills"> Skills </h2>
                        <Skills />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
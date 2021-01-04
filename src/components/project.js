import React from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';
import '../App.css';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "purple", height: "176px", background: "url(https://thumbs.dreamstime.com/z/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg) center / cover " }}>

                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Typing Speed Game <hr />
                        A game which has three levels such as
                        easy, moderate, difficult. All the levels have different value of time to type-in the correct
                        word and the length of the word also varies with the type of level chosen.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/Javascript_game">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "purple", height: "176px", background: "url(https://thumbs.dreamstime.com/z/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg) center / cover " }}>

                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Math-o-Logy <hr />
                            The classic Math game which has three levels such as easy, medium, hard and depending upon the level,
                            the time to calculate the problem varies.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/Math_ology">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "purple", height: "176px", background: "url(https://thumbs.dreamstime.com/z/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg) center / cover " }}>

                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            F.R.I.E.N.D.S Quiz <hr />
                            The game based on the web series called "F.R.I.E.N.D.S". It has quiz on every important character present in the
                            web series.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/F.R.I.E.N.D.S_Quiz">Github</Button>
                        </CardActions>
                    </Card>

                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "purple", height: "176px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsh3v9WalFhu8Sd9QNAYWTo9ZPrhJAVOCElw&usqp=CAU) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Employee App <hr />
                            Implementation of CRUD in the the project. It also uses the session too check whether the authenticate user is
                            modifying the website or not. If, there is no authenticate user, it will kick you out to the login page.
                            All the pages that the admin can use are secured using this feature.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/EmployeeApp">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "purple", height: "176px", background: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsh3v9WalFhu8Sd9QNAYWTo9ZPrhJAVOCElw&usqp=CAU) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Student Management System <hr />
                            A project that manages the students data. The students has the access to track their record such as their
                            marks, fee status etcetera. The admin has the access to manipulate the data such as Create, Read, Update, Delete (CRUD)
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/sms">Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "white", height: "176px", background: "url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            YouTube Clone <hr />
                            A project that uses YouTube API to fetch the results of the search query. Used classful states
                            in this project.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/YouTube_Clone_React">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "white", height: "176px", background: "url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }}>
                            To Do List <hr />
                            A classic ToDo list app to understand the basic concepts of React such as class components, functional
                            components, hooks etcetera.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/To-do-list-with-React">Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://ih1.redbubble.net/image.1075465556.1060/flat,750x,075,f-pad,750x1000,f8f8f8.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Classic Knappsack Problem <hr />
                            The classic Knapsack question solved using three approaches:
                            1: Using Recursion.
                            2: Using Memoization.
                            3: Using Dynamic Programming.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/Knapsack">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://ih1.redbubble.net/image.1075465556.1060/flat,750x,075,f-pad,750x1000,f8f8f8.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Egg Drop Problem <hr />
                            A Leetcode problem. In this question we have to find out the minimum number of floors to find the threshold floor of a building.
                            Threshold floor means the floor from which we drop an egg, it won't break and the egg won't break if we throw the egg from the floors
                            below that threshold floor but the egg will break if we try to throw the egg from the floors which are above the threshold floor.
                            Eg: 3 eggs and 5 floors
                            Output: Minimum number of ways are: 3
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/EggDrop">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://ih1.redbubble.net/image.1075465556.1060/flat,750x,075,f-pad,750x1000,f8f8f8.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text">
                            Operations on BinaryTree <hr />
                            Operations are as follows:
                            1: Printing the left as well the right child of the root explicitly.
                            2: Count all the nodes.
                            3: Count all the leaf nodes.
                            4: Sum of all the nodes.
                            5: Sum of all the leaf nodes.
                            6: Height of the tree.
                            7: Check whether the tree is balanced or not (Difference of the left tree and right tree can be 1 or 0).
                            8: InOrder traversal of the tree.
                            9: PreOrder traversal of the tree.
                            10: PostOrder traversal of the tree.
                            11: Level order traversal of the tree.
                            12: Nodes without sibling.
                            13: Maximum and Minimum value of node in tree (using PairAns class i.e, with better time complexity).
                            14: Node that has only one child.
                            15: Height and the Diameter of the tree (using inbuilt pair class of STL).
                            16: Printing the tree diagonally.
                            17: Printing the boundary nodes of the tree.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/BinaryTreeOperations">Github</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}  className="card-grid" >
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://ih1.redbubble.net/image.1075465556.1060/flat,750x,075,f-pad,750x1000,f8f8f8.jpg) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }} className="card-text"> Operations on Linked List <hr />
                            1: Printing all the nodes until data value -1.
                            2: Reversing all the nodes using Recursion.
                            3: MergeSort in linked list.
                            4: Check whether linked list is palindrome or not.
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/LinkedListOperations">Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://hackcbs.github.io/2.0-site-code/assets/images/logo.PNG) center/cover " }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }}> Participated in HackCBS 2.0 Hackathon <hr />
                        
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/Jaggi0504/IMAhistory">Github</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 5) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://thumbs.dreamstime.com/z/javascript-logo-javascript-logo-white-background-vector-format-available-136765881.jpg) center / cover "  }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }}>F.R.I.E.N.D.S Quiz <hr />
                        
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://jaggi0504.github.io/F.R.I.E.N.D.S/index.html">LIVE</Button>
                        </CardActions>
                    </Card>
                    <Card shadow={5} style={{ minWidth: "450", margin: "auto" }} className="card-grid">
                        <CardTitle style={{ color: "whitesmoke", height: "176px", background: "url(https://www.andreasreiterer.at/wp-content/uploads/2017/11/react-logo-825x510.jpg) center/cover "  }}>
                        </CardTitle>
                        <CardText style={{ color: "green", fontSize: "20px", fontFamily: 'Open Sans Condensed, sans-serif' }}> YouTube clone <hr />
                        
                    </CardText>
                        <CardActions border>
                            <Button colored href="https://jaggi0504.github.io/youTube/">LIVE</Button>
                        </CardActions>
                    </Card>
                </div>
            )
        } 
    }

    render() {
        return (
            <div className='category-tabs'>
                <div className = "project-tab">
                <Tabs
                activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}> JavaScript </h1> </Tab>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}> PHP </h1> </Tab>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}> React </h1> </Tab>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}> C++ </h1> </Tab>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}> HackCBS2.0 </h1> </Tab>
                    <Tab> <h1 style={{fontSize:"10px", marginTop:"14px"}}>Live Projects </h1> </Tab>
                </Tabs>
                </div>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Project;
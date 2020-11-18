import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="My Portfolio" className="header-color" scroll href="">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title="My Portfolio">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/project">Projects</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

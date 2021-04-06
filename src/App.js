import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GoogleBtn from './GoogleBtn';
// import MentorEvent from './components/MentorEvent';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link } from 'react-router-dom';

function App() {
  return (
    // <div className="App">
    //   {/* <GoogleBtn/> */}
    //   <MentorEvent/>
    // </div>
    <div className="demo-big-content" >
    <Layout>
        <Header title="MSIT" scroll>
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/MentorEvent">Event</Link>
                <Link to="/gradingpolicy">Grading Policy</Link>
                <Link to="/grades">Grading Students</Link>
                <Link to="/home">Logout</Link>
            </Navigation>
        </Header>
        <Drawer title="MSIT">
            <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/MentorEvent">Event</Link>
                <Link to="/gradingpolicy">Grading Policy</Link>
                <Link to="/grades">Grading Students</Link>
                <Link to="/home">Logout</Link>
                {/* <Link to="/">Link</Link> */}
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;



import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/Home';
import Event from './components/Event';
import News from './components/News';
import NavBar from './components/CustomNavBar';
import ManualUpload from './components/ManualUpload';
import GradingPolicy from './components/GradingPolicy'
import InitiatePreferences from './components/InitiatePreferences'

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/event" component={Event} />
        <Route path="/news" component={News} />
        <Route path="/manualupload" component={ManualUpload} />
        <Route path="/initiatepreferences" component={InitiatePreferences} />
        <Route path="/gradingpolicy" component={GradingPolicy} />
      </div>
    </Router>
  );
}

export default App;

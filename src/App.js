import './App.css';
import React from "react";
import LandingPage from './frontend/components/LandingPage'
import {Route} from 'react-router-dom';
import HomePage from './frontend/components/HomePage'
import NavBar  from "./frontend/components/NavBar"
import SearchBar from "./frontend/components/SearchBar"
function App() {
  return (
    <React.Fragment>
    <div className="App">
  <Route exact path='/home' component={SearchBar}/>
  <Route exact path='/' component={LandingPage}/>
  <Route path='/' component={NavBar}/>
  <Route exact path = "/home" component={HomePage}/>
    </div>
    
    </React.Fragment>  );
}

export default App;

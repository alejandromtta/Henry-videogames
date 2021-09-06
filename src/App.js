import './App.css';
import React from "react";
import LandingPage from './frontend/components/LandingPage'
import {Route} from 'react-router-dom';
import HomePage from './frontend/components/HomePage'
import NavBar  from "./frontend/components/NavBar"
import SpecificCard from './frontend/components/SpecificCard';
import Form from './frontend/components/Form'
function App() {
  return (
    <React.Fragment>
    <div className="App">
    <Route path='/' component={NavBar}/>
  <Route exact path='/' component={LandingPage}/>
 <Route path="/create" component={Form}/>
  <Route exact path = "/home" component={HomePage}/>
  <Route path ="/videogames/:id" component={SpecificCard}/>
    </div>
    
    </React.Fragment>);
}

export default App;

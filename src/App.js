import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import SuggestedTopics from './components/SuggestedTopics';
import Modules from './components/Modules';
import FlashCards from './components/FlashCards';

class App extends Component{
  render(){
    return(
      <div>
        <SuggestedTopics />
        <Modules />
        <FlashCards />
      </div>
    )
  }
}

export default App;

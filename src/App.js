import React, {Component} from 'react';
import  CardDeck from "./CardDeck/CardDeck";
import './CardDeck/deck.css'

class App extends Component{
  render(){
    return(
      <div className='root'>
          <h1 className='title'>* CARD DEALER *</h1>
          <h4 className='subtitle'>CARD API MADE WITH REACT</h4>
          <CardDeck/>
      </div>
    )
      
      
  }
}

export default App;

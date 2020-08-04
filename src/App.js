import React from 'react';
import './App.css';
import Eyeball from './Eyeball';

function randoX(){
  return Math.floor(Math.random() * (1000 - 10 + 1) + 10)
}

function randoY(){
  return Math.floor(Math.random() * (600 - 10 + 1) + 10)
}

function RandomlyPlacedEyeball(props){
  return (<Eyeball style={{
      position: 'absolute',
      top: randoY()+'px',
      left: randoX()+'px'
    }} />)
}

function RandomlyPlacedEyeballs(props){
  var cards = [];
  for (var i = 0; i < 10; i++) {
      cards[i] = (<RandomlyPlacedEyeball key={"eye"+i} />);
  }
  return cards
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Eyeball/>
      <RandomlyPlacedEyeball/>
      <RandomlyPlacedEyeballs/>
      </header>
    </div>
  );
}

export default App;

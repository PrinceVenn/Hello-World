import React, { Component } from 'react';
import './App.css';

var wisdoms = [
  "Semper Ubi Sub Ubi. (Always wear underwear.)",
  "Floss your teeth every day.",
  "You will pay for your sins. If you have already paid, please disregard this message.",
  "Today is a day for firm decisions!! Or is it?",
  "Caution: Keep out of reach of children.",
  "You're growing out of some of your problems, but there are others that you're growing into.",
  "Every cloud engenders not a storm.",
  "I just want to learn how to make the new wisdoms button work",
  "but im not sure how I would go about doing that",
  "I feel like JD is talking about some cool stuff but since I have not gotten past the button I really dont know what most of it most of it means"

]


class App extends Component {
  constructor(props) {
    super(props);
    
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.state = {
      wisdom: wisdoms[index]
    };
    
    this.setRandomWisdom = this.setRandomWisdom.bind(this);
    this.addWisdom = this.addWisdom.bind(this);
    
   // this.websocket = new WebSocket('ws://' + window.location.host + '/comm');
   // this.websocket.onmessage = this.handleMessage.bind(this);
    // this.websocket.open();
  }
  
 // handleMessage(event) {
   // var msg = JSON.parse(event.data);
   // wisdoms.push(msg.wisdom);
   // this.setWisdom(wisdoms.length-1);
  }
  
  setRandomWisdom() {
    var index = Math.floor(Math.random() * wisdoms.length);
    
    this.setWisdom(index);
  }
  
  setWisdom(index) {
    this.setState(function(state) { 
      return {
        wisdom: wisdoms[index]
      }
    });
  }
  
  addWisdom() {
    let wisdom = prompt("What new wisdom do you offer?");
    
   // this.websocket.send(JSON.stringify({type: "broadcast", wisdom: wisdom}));
  }
  
  removeCurrentWisdom() {
    var index = wisdoms.indexOf(this.state.wisdom);
    wisdoms.splice(index, 1);
  }
  
  render() {
    return (
     <div className="App">
        {this.state.wisdom}
        <button className="more" onClick={this.setRandomWisdom}>Another</button>
        <button className="new-wisdom" onClick={this.addWisdom}>Add Wisdom</button>
      </div>
    );
  }
}

export default App;

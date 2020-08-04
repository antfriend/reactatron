import React, {Component} from "react";
import EventListener, {withOptions} from 'react-event-listener';
//import useMousePosition from './useMousePosition'
/*
    an eyeball looking around!
*/

class Eyeball extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: this.rando(),
      y: this.rando(),
      mousX: 0, 
      mousy: 0
    };
  }

  
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      Math.floor(Math.random() * (3000 - 1500 + 1) + 1500)
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  
  tick() {
    this.setState({
      x: this.rando(),
      y: this.rando()
    });
  }

  rando() {
    const min = -12;
    const max = 12;

    function Offset(n) {
      return 50 + n;
    }
    return Offset(Math.floor(Math.random() * (max - min + 1) + min));
  }

  handleMouseMove = (ev) => {
    const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;
    const { x, y } = this.state;
    var myCenterX = x + 50;
    var myCenterY = y + 50;
    var lookX = 50 + map(ev.x,0+x,1000-x,-12,12);
    var lookY = 50 + map(ev.y,0+y,1000-y,-12,12);

    //console.log(lookX + " " + lookY);
    this.setState({
      x: lookX,
      y: lookY
    });
  };

  render() {
    const { mousX, mousY } = this.state;

    return (
      <div style={this.props.style} >
        
        <svg height="100" width="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="black"
            strokeWidth="3"
            fill="white"
          />
          <ellipse
            cx={this.state.x}
            cy={this.state.y}
            rx="20"
            ry="20"
            stroke="black"
            strokeWidth="1"
            fill="red"
          />
          <ellipse
            cx={this.state.x}
            cy={this.state.y}
            rx="10"
            ry="10"
            stroke="black"
            strokeWidth="1"
            fill="black"
          />
          <circle
            cx="42"
            cy="42"
            r="9"
            stroke="white"
            strokeWidth="0"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
        <EventListener target={document} onMouseMoveCapture={this.handleMouseMove} />
      </div>
    );
  }
}

export default Eyeball;

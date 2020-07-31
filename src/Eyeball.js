import React from 'react';
/*
    draws an eyeball looking around!
*/

class Eyeball extends React.Component {
     
    constructor(props) {
        super(props)

        this.state = {
            x: this.rando(),
            y: this.rando()
        };
      }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            Math.floor(Math.random() * (1100 - 900 + 1) + 900)
          );
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            x: this.rando(),
            y: this.rando()
        });
      }
    
    rando(){
        const min = -9;
        const max = 9;

        function Offset(n){
            return 50 + n;
        }
        return Offset(Math.floor(Math.random() * (max - min + 1) + min))
      }

    render() {
      return (<div style={this.props.style}><svg  height="100" width="100">
                <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="white" />
                <ellipse cx={this.state.x} cy={this.state.y} rx="20" ry="20" stroke="black" strokeWidth="1" fill="red" />
                <ellipse cx={this.state.x} cy={this.state.y}  rx="10" ry="10" stroke="black" strokeWidth="1" fill="black" />
                <circle cx="42" cy="42" r="9" stroke="white" strokeWidth="0" fill="white" fillOpacity="0.8"/>
            </svg></div>)
        }
    }

export default Eyeball;
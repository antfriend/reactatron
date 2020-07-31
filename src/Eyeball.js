import React from 'react';
/*
    draws an eyeball looking around!
*/

const Eyeball = () => { 
    const eyeRef = React.useRef();
    //const myId = eyeRef.current.id;
    function Offset(n){
        return 50 + n;
    }

    function rando() {
        const min = -9;
        const max = 9;
        return Math.floor(Math.random() * (max - min + 1) + min);
      }

    function drawAt(x,y){
        return <svg  height="100" width="100">
        <circle cx="50" cy="50" r="40" stroke="black" strokeWidth="3" fill="white" />
        <ellipse cx={Offset(x)} cy={Offset(y)} rx="20" ry="20" stroke="black" strokeWidth="1" fill="red" />
        <ellipse cx={Offset(x)} cy={Offset(y)}  rx="10" ry="10" stroke="black" strokeWidth="1" fill="black" />
        <circle cx="42" cy="42" r="9" stroke="white" strokeWidth="0" fill="white" fillOpacity="0.8"/>
    </svg>
    }
    function rem(){
        return drawAt(rando(),rando())
    }

    const element = (
        rem()
      );
      
      React.useEffect(() => {
        // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
        const eyeNode = eyeRef.current;
        // The returned object will persist for the full lifetime of the component.
 
        // Initiating VanillaTilt and passing tiltNode and vanillaTiltOptions
        //VanillaTilt.init(tiltNode, vanillaTiltOptions);
        return () => {
          // ensuring that any node refs in memory get garbage collected
          // prevent memory leaks
          //tiltNode.vanillaTilt.destroy();
        };
        // adding a dependencies array, to avoid multiple renders
      }, []);

    //setInterval(rem, 1000);

    return element
}

export default Eyeball;
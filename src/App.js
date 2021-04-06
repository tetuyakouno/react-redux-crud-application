import React, { Component } from "react";

// function App() {
//   return (<h1>Hello, world!</h1>);
// }

class App extends Component {
  render(){
    // const greeting = "Hi, Tom!"
    // const dom = <h1>{greeting}</h1>;
    // return dom;
    return(
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked!")}} />
      </React.Fragment>
    )
  }
}


export default App;

import React from "react";

// function App() {
//   return (<h1>Hello, world!</h1>);
// }

// class App extends Component {
//   render(){
//     // const greeting = "Hi, Tom!"
//     // const dom = <h1>{greeting}</h1>;
//     // return dom;
//     return(
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked!")}} />
//       </React.Fragment>
//     )
//   }
// }

const App = () => {
  return(
    <div>
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;

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
  const profiles = [
    { name: "taro", age: 11},
    { name: "hanako", age: 6},
    { }
  ]
  return(
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old! </div>
}

User.defaultProps = {
  name: "N/A" , 
  age: 0
}

export default App;

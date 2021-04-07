import React from "react";
import PropTypes from "prop-types";

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
    { name: "Taro", age: 11},
    { name: "hanako", age: 6},
    { name: "NoName", age: 3}
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

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

User.defaultProps = {
  name: "N/A" , 
  age: 0
}

export default App;

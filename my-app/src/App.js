import logo from './logo.svg';
import './App.css';

import { Fragment } from "react"

// import Button from './Button';
import { SmallButton } from './Button';
import Car from './Car';
// object destructuring


// default export and named export
// commonjs 
// ES6 module system
// arguement in function => props to component


// return (
//   {/*
//   <div className="App">
//      <header className="App-header">
//       <p>{true ? "returnme ": "donot return me"}</p>
//       <img src={logo} className="App-logo" alt="logo" />
//       <img src="./logo.svg" className="App-logo" alt="logo" />
//       <img src="./logo192.png" className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React changed me
//       </a>
//     </header>
//   </div>
//    */}
// );

function App() {
  return <Fragment>

    <Car name="tesla" />

    {/* <div>welcome</div>
    <div>welcome again</div> */}
    {/* <Button
      title="Big"
    />
    <Button
      title="Small"
    /> */}



    {/* <SmallButton
      title="custom title"
      color="red"
    >
      <h1>small button</h1>
    </SmallButton> */}

  </Fragment>
}

export default App;

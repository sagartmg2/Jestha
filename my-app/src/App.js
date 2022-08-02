import logo from './logo.svg';
import './App.css';

import { Fragment, useState } from "react"

// import Button from './Button';
import { SmallButton } from './Button';
import Car from './Car';
import Home from './Home';
// object destructuring

import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Team from './Team';
import ProtectedRoute from './ProtectedRoute';
import ReducerCounter from './ReducerCounter';
import { useSelector, useDispatch } from 'react-redux'
import Auth from './Auth';
import Counter from './Couter';

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

  const [auth, setAuth] = useState(true);
  // const count = useSelector((state) => state.counter.value)
  // const dispatch = useDispatch()


  return <>
    <Counter/>
    <hr></hr>
    <Auth />
  </>

 


  return <ReducerCounter />
  return <Fragment>
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <ul className="">
            <Link to="/">Home</Link> |{" "}
            <Link to="login">login</Link>|{" "}
            <Link to="teams">Teams</Link>|{" "}
            <Link to="teams/id">Teams</Link>|{" "}
            <Link to="teams/new">Teams</Link>|{" "}
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<h1>home</h1>} />
        <Route path="login" element={<h1>login</h1>} />
        {/* <Route path="teams/:slug" element={<h1>show spieci</h1>} /> */}
        {/* <Route path="teams" element={<h1>Teams </h1>}> */}
        <Route path="teams" element={<ProtectedRoute />} >
          <Route index element={<h1>Team </h1>} />
          <Route path=":teamId" element={<Team auth={auth} />} />
          <Route path="new" element={<h1>NewTeamForm </h1>} />
        </Route>
      </Routes>
    </div >
    {/* <Car name="tesla" /> */}
    {/* <Home title="home page" /> */}

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

  </Fragment >
}

export default App;

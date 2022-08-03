import { Routes, Route, Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

import Signup from './page/Signup';
import Login from './page/Login';
import Home from './page/Home';
import Navbar from './component/Navbar';
import Order from "./page/Order";
import ProtectedRoute from "./component/ProtectedRoute";
import Show from "./page/Product/Show";
import Index from "./page/Product/Index";
import PageNotFound from "./component/PageNotFound";
import Dashboard from "./page/Dashboard";
import { roles } from "./constants/role";
import { useDispatch } from "react-redux";
import { setUser, login, logout } from "./redux/reducer/auth";
import axios from "axios";

function App() {
  const dispatch = useDispatch();


  /* load logged user when page refresh  */
  if (localStorage.getItem("access_token")) {
    dispatch(login())

    // get user from token 
    axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/users/get-user`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token")
      }
    })
      .then(res => {
        dispatch(login())
        dispatch(setUser(res.data))
      })
      .catch(err => {
        dispatch(logout())
      })
  } else {
    dispatch(logout())
  }

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products">
          <Route index element={<Index />} />
          <Route path=":id" element={<Show />} />
        </Route>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />
        <Route element={<ProtectedRoute />} >
          <Route path="orders" element={<Order />} />
        </Route>
        <Route element={<ProtectedRoute
          access_to={roles.SELLER}
        />} >
          <Route path="sellers">
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<Index />} />
              <Route path=":id" element={<Show />} />
            </Route>
          </Route>
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

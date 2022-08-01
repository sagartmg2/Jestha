import { Routes, Route, Link } from "react-router-dom";
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

function App() {
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

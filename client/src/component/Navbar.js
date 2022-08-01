import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    let {pathname} = useLocation();
    
    if(pathname == "/login" || pathname=="/signup")
    {
        return null;
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="orders"
                                    className="nav-link"
                                    style={({ isActive }) =>
                                        isActive ? { fontWeight: "700" } : undefined
                                    }
                                >
                                    Orders
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="checkout"
                                    className="nav-link"
                                    style={({ isActive }) =>
                                        isActive ? { fontWeight: "700" } : undefined
                                    }
                                >
                                    Checkout
                                </NavLink>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>

    )
}

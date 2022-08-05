import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux'
import { roles } from "../constants/role"

export default function Navbar() {
    const { user } = useSelector((state) => state.auth)

    let { pathname } = useLocation();

    if (pathname == "/login" || pathname == "/signup") {
        return null;
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {
                                user.role == roles.SELLER
                                &&
                                <>
                                    <li className="nav-item">
                                        <NavLink
                                            to="sellers/dashboard"
                                            className="nav-link"
                                            style={({ isActive }) =>
                                                isActive ? { fontWeight: "700" } : undefined
                                            }
                                        >
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink
                                            to="sellers/products"
                                            className="nav-link"
                                            style={({ isActive }) =>
                                                isActive ? { fontWeight: "700" } : undefined
                                            }
                                        >
                                            Warehouse/Store
                                        </NavLink>
                                    </li>
                                </>


                            }
                            <li className="nav-item">
                                <NavLink
                                    to="products"
                                    className="nav-link"
                                    style={({ isActive }) =>
                                        isActive ? { fontWeight: "700" } : undefined
                                    }
                                >
                                    Products
                                </NavLink>
                            </li>
                            {
                                user.role == roles.BUYER
                                &&
                                <>
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
                                </>

                            }
                        </ul>
                        {

                            // pathname.includes("/products")
                            // &&
                            // <form className="d-flex" role="search">
                            //     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            //     <button className="btn btn-outline-success" type="submit">Search</button>
                            // </form>
                        }
                        {
                            <div>
                                <p className="text-capitalize mb-0"><strong>{user.name}</strong></p>
                                <p className="mb-0">{user.email}</p>
                            </div>

                        }
                    </div>
                </div>
            </nav>
        </>

    )
}

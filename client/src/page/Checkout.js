import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import axios from "axios"
import { clearCart } from '../redux/reducer/cart'

export default function Checkout() {
    const { items: cart_items } = useSelector((state) => state.cart)

    const dispatch = useDispatch();

    let total_price = 0;
    let cart_items_mappig = cart_items.map((el, index) => {
        total_price += (el.price * el.quantity)
        return <tr>
            <td>{index + 1}</td>
            <td>{el.name}</td>
            <td>{el.quantity}</td>
            <td>{el.price * el.quantity}</td>
        </tr>
    })


    function placeOrder() {
        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/orders`
        let data = {
            products: cart_items
        }
        axios.post(url, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        }).then(res => {
            dispatch(clearCart())
        })
    }

    return (
        <div className="container mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <td scope="col">#</td>
                        <td scope="col">Product</td>
                        <td scope="col">Quantity</td>
                        <td scope="col">Price</td>
                    </tr>
                </thead>

                <tbody>
                    {cart_items_mappig}
                    <tr>
                        <td colSpan={3} className="text-center">Total</td>
                        <td>{total_price}</td>
                    </tr>
                </tbody>
            </table>
            {
                cart_items.length > 0
                &&
                <button type="button" onClick={placeOrder} className="btn btn-primary">place order</button>
            }
        </div>
    )
}

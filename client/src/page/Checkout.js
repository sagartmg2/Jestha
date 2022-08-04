import React from 'react'
import { useSelector } from 'react-redux'

export default function Checkout() {
    const { items: cart_items } = useSelector((state) => state.cart)

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
                <button className="btn btn-primary">place order</button>
            }
        </div>
    )
}

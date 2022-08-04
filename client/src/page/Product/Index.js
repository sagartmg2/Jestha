import axios from 'axios'
import React, { useState, useEffect } from 'react'

import {
    useLocation
} from "react-router-dom";
export default function Index() {

    let location = useLocation();

    const [products, setProducts] = useState([]);

    console.log(location.pathname)
    // TODO: depending up buyer and seller, fetch allproduct or only seller products
    let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products`
    if(location.pathname.includes("sellers/products")){
        url = `${process.env.REACT_APP_SERVER_DOMAIN}/products/sellers`
    }

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(res => {
                setProducts(res.data.data)
            })
            .catch(err => {

            })
    }, []);

    return (
        <div className="container">
            <div className="row">
                {products.map(el => {

                    let blob;
                    let image = ""
                    if (el.images[0]?.buffer?.data) {
                        blob = new Blob([Int8Array.from(el.images[0]?.buffer?.data)], { type: "image/png" });
                        image = window.URL.createObjectURL(blob);
                    }

                    return <div class="col-3 p-2">
                        <div class="card">
                            <img src={image} class="card-img-top" alt={el.name} />
                            <div class="card-body">
                                <h5 class="card-title">{el.name}</h5>
                                <p class="card-text">{el.description}</p>
                                <a href="#" class="btn btn-primary">Add to Cart</a>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
import React, { useState } from 'react'
import axios from "axios"

export default function Store() {

    const [state, setState] = useState({
        name: "product 1",
        price: "12",
        in_stock: "12",
        description: "description",
        brands: "levis,adidas",
        categories: "electornics,ev",
    });

    function handleChange(e) {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    function handleSubmit(e) {
        e.preventDefault();
        let { name, price, in_stock, description, brands, categories } = state
        brands = brands.split(",")
        categories = categories.split(",")
        let data = { name, price, in_stock, description, brands, categories }

        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products`

        // => base64 
        
        // formdata
        // let formdata = new FormData();
        // formdata.append("name",name)

        axios.post(url, data)
            .then(res => {

            })
            .catch(err => {

            })

    }


    return (
        <div className='container mt-5'>
            <div className='row mt-5 justify-content-center'>
                <form onSubmit={handleSubmit} className="mt-5 col-8">
                    <h1>Store Product</h1>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name='name' className='form-control' value={state.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="number" min={0} name='price' className='form-control' value={state.price} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">in_stock</label>
                        <input type="number" min={0} name="in_stock" className='form-control' value={state.in_stock} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">description</label>
                        <textarea type="text" name='description' rows={6} className='form-control'
                            value={state.description}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">brands</label>
                        <input type="text" name='brands' className='form-control' value={state.brands} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">categories</label>
                        <input type="text" name='categories' className='form-control' value={state.categories} onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
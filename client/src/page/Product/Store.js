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
        photos: {}
    });

    function handleChange(e) {
        if (e.target.type == "file") {
            setState({ ...state, [e.target.name]: e.target.files })
        } else {
            setState({ ...state, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        let { name, price, in_stock, description, brands, categories, photos } = state
        brands = brands.split(",")
        categories = categories.split(",")
        let data = { name, price, in_stock, description, brands, categories }

        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products`

        let formdata = new FormData();
        formdata.append("name", name)
        formdata.append("price", price)
        formdata.append("in_stock", in_stock);
        formdata.append("description", description);
        formdata.append("brands", brands);
        formdata.append("categories", categories);


        // console.log(typeof (state.photos))
        // console.log(Array.isArray(state.photos))
        let arr = Object.entries(state.photos)
        // console.log({ arr })

        arr.forEach(el => {
            formdata.append("photos", el[1]);
        })

        axios.post(url, formdata, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
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

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Images</label>
                        <input type="file" multiple name='photos' className='form-control' onChange={handleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
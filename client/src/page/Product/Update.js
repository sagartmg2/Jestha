import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useParams } from "react-router-dom"
import { roles } from "../../constants/role"


export default function Update() {


    const [product, setProduct] = useState({

    });

    const { id } = useParams();
    useEffect(() => {

        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products/${id}`
        axios.get(url, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`
            }
        })
            .then(res => {
                setProduct(res.data.data)

            })
            .catch(err => {

            })
    }, [])

    function handleChange(e) {
        if (e.target.type == "file") {
            let arr = Object.values(e.target.files)

            setProduct({ ...product, [e.target.name]: [...product.images, ...arr] })
        } else {
            setProduct({ ...product, [e.target.name]: e.target.value })
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        // console.log(1212);
        // return;
        let { _id, name, price, in_stock, description, brands, categories, images } = product

        if (!Array.isArray(brands)) {
            brands = brands.split(",")
        }
        if (!Array.isArray(categories)) {
            categories = categories.split(",")
        }

        let data = { name, price, in_stock, description, brands, categories }

        let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products/${_id}?_method=PUT`

        let formdata = new FormData();
        formdata.append("name", name)
        formdata.append("price", price)
        formdata.append("in_stock", in_stock);
        formdata.append("description", description);
        formdata.append("brands", brands);
        formdata.append("categories", categories);


        // console.log(typeof (product.images))
        // console.log(Array.isArray(product.images))
        // let arr = Object.entries(product.images)
        // console.log({ arr })

        product.images.forEach(el => {
            if (el._id) {
                formdata.append("images[]", JSON.stringify(el));
                // formdata.append("images", (el));
            } else {
                formdata.append("photos", el);

            }
        })
        // formdata.append("_method", "PUT");


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

    function deleteImage(image, index) {
        let images = product.images;
        // images = images.filter((el,el_index) => el._id != image._id)
        images = images.filter((el, el_index) => el_index != index)
        setProduct({ ...product, images })
    }


    return (
        <div className='container mt-5'>
            <div className='row mt-5 justify-content-center'>
                <form onSubmit={handleSubmit} className="mt-5 col-8">
                    <h1>Update Product</h1>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Name</label>
                        <input type="text" name='name' className='form-control' value={product.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Price</label>
                        <input type="number" min={0} name='price' className='form-control' value={product.price} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">in_stock</label>
                        <input type="number" min={0} name="in_stock" className='form-control' value={product.in_stock} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">description</label>
                        <textarea type="text" name='description' rows={6} className='form-control'
                            value={product.description}
                            onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">brands</label>
                        <input type="text" name='brands' className='form-control' value={product.brands} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">categories</label>
                        <input type="text" name='categories' className='form-control' value={product.categories} onChange={handleChange} />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Images</label>
                        <input type="file" multiple name='images' className='form-control' onChange={handleChange} />
                    </div>
                    <div className="row">
                        {
                            product?.images?.map((el, index) => {

                                let blob;
                                let image = ""
                                if (el?.buffer?.data) {
                                    blob = new Blob([Int8Array.from(el?.buffer?.data)], { type: el?.mimetype });
                                    image = window.URL.createObjectURL(blob);
                                } else {
                                    // blob = new Blob([Int8Array.from(el?.arrayBuffer)], { type: el?.type });
                                    // image = window.URL.createObjectURL(blob);
                                    image = URL.createObjectURL(el)
                                }
                                return <div className="m-2 col-2">

                                    <img src={image} class="card-img-top" alt={""} />
                                    <button type="button" onClick={() => deleteImage(el, index)} className='btn btn-danger btn-sm text-center'>delete</button>
                                </div>

                            })
                        }

                    </div>

                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>
        </div>
    )
}
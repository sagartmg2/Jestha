import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { roles } from '../../constants/role';
import { addToCart, removeFromCart, clearCart } from '../../redux/reducer/cart';


export default function Show() {
  let { id } = useParams();
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const [product, setProduct] = useState({});

  useEffect(() => {
    let url = `${process.env.REACT_APP_SERVER_DOMAIN}/products/${id}`
    axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    }).then(res => {
      // console.log(res.data)
      setProduct(res.data.data)
    })
      .catch(err => {

      })

  }, [])

  function handleAddToCart() {

    const { _id, name, price } = product
    dispatch(addToCart({
      _id, name, price
    }))
  }


  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          // images
        </div>
        <div className='col-md-6'>
          <h1>{product?.name}</h1>
          <p>price: ${product?.price}</p>
          <p>{product?.description}</p>
          <p>stock:{product?.in_stock}</p>
          <p>brands:

            {product?.brands?.map(el => {
              return <span>{el}</span>
            })}
          </p>

          <p>categoreis:
            {product?.categories?.map(el => {
              return <span> {el} </span>
            })}
          </p>

          <p>stock:{product?.in_stock}</p>

          {
            user.role == roles.BUYER
            &&
            <button type='button' className='btn btn-primary' onClick={handleAddToCart}>Add to Cart</button>
          }

        </div>

      </div>

    </div>
  )
}

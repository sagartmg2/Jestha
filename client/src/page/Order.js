import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function Order() {

  useEffect(() => {
    let url = `${process.env.REACT_APP_SERVER_DOMAIN}/orders`

    axios.get(url, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`
      }
    })
      .then(res => {


        // clear cart list

      })
      .catch(err => {
        console.log(err)
        console.log(err.response)
        // if(err.status)

      })
  }, [])
  return (
    <div>Order</div>
  )
}

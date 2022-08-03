import React from 'react'

export default function ErrorMessage({message}) {
  return (
    <small className='text-danger'>{message}</small>
  )
}

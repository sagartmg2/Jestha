import React from 'react'
import { useParams } from 'react-router-dom';

export default function Show() {
    let { id } = useParams();
    return (
    <div>Show{id}</div>
  )
}

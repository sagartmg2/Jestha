import React from 'react'
import { useParams } from 'react-router-dom'

export default function Team() {

    let params = useParams();

    console.log({ params })

    return (
        <div>Team {params.teamId}</div>

    )

}

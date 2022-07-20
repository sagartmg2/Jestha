import React from 'react'
import { useParams } from 'react-router-dom'
import Button from './Button';

export default function Team(props) {

    let params = useParams();

    console.log({ params })
    
    return (
        <>
            <div>Team {params.teamId}</div>
            <Button auth={props.auth} />
        </>

    )

}

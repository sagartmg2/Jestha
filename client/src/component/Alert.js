import React from 'react'

export default function Alert({ status, message }) {
    return (
        <div class={`alert alert-${status}`} role="alert">
            {message}
        </div>
    )
}

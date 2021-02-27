import React from 'react'
import './Button.scss'
export default function Button({className='' ,...props}) {
    return (
        <button {...props} className={`custom-button btn font-weight-bold ${className}`}> {props.children} </button>
    )
}

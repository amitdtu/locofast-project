import React from 'react'

export default function ErrorText({text, isError, ...props}) {
    return (
        isError ? <p className="error-text mt-1 mb-0 text-danger">{text}</p> : null
    )
}

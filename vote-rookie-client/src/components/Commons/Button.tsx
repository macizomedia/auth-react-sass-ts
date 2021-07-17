import React from 'react'

const Button = (props: {
    class: string | undefined
    action:
        | boolean
        | React.ReactChild
        | React.ReactFragment
        | React.ReactPortal
        | null
        | undefined
}) => {
    return (
        <>
            <button className={props.class}>{props.action}</button>
        </>
    )
}

export default Button

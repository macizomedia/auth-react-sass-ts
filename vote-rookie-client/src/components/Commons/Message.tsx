import React from 'react'

const Message = ({
    title,
    span,
    content,
    foot
}: {
    title: string
    span: string
    content: string
    foot: string
}) => {
    return (
        <div>
            <h1 className="hero">{title}</h1>
            <span className="hero-2">{span}</span>
            <p className="figma_text">{content}</p>
            <p className="figma_text_small"><small>{foot}</small></p>

        </div>
    )
}

export default Message

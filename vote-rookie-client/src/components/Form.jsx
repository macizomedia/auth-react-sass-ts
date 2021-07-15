import React from 'react'

function Form() {
    return (
        <div>
            <button className="figma-button-1">
                <span className="action-1">LOGIN</span>
            </button>
            <button className="figma-button-2">
                <span className="action-2">START AS A CITIZEN</span>
            </button>
            <a className="text-4" href="/organization">
                sign up your organization
            </a>
        </div>
    )
}

export default Form

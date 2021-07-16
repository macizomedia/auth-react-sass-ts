import React from 'react'
import logo from '../../assets/img/logo.png'

export const Header = () => {
    return (
        <div className="get-started">
            <div className="navigation-bar">
                <div className="frame-logo">
                    <img
                        className="voterookie-logo"
                        src={logo}
                        alt="logo-vote"
                    />
                </div>
            </div>
            <div className="progress-bar">
                <strong>PROGRESS BAR</strong>
            </div>
            <h1 className="hero">
                <span className="span">Hello! Great that you are joining </span>
                <span className="span">Vote Rookie!</span>
            </h1>
            <p className="hero-2">
                To personalise Vote Rookie for you, I would like to ask you a
                few questions.
                <br />
                <br />
                Please fill in the details below
            </p>
        </div>
    )
}

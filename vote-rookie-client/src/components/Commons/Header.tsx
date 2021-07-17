import React from 'react'
import logo from '../../assets/img/logo.png'

const Header = () => {
    return (
        <div>
            <div className="get-started-1">
                <div className="overlap-group">
                    <div className="status-bar">
                        <div className="navigation-bar">
                            <img src={logo} alt="voterookie-logo" />
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="figma_hero_text">
                <span>Hello! Great that you are joining</span>
                <br />
                <span className="span">Vote Rookie!</span>
            </h1>
            <p className="figma_text">
                To personalise Vote Rookie for you, I would like to ask you a
                few questions.
                <br />
                <br />
                Please fill in the details below
            </p>
        </div>
    )
}

export default Header

import React from 'react'
import img from '../assets/img/img_1.png'
import rectangle from '../assets/img/rectangle.png'
import logo from '../assets/img/logo.png'

function Head() {
    return (
        <div>
            <div className="overlap-group">
                <img className="rectangle-3" src={rectangle} alt="rectangle" />
                <img className="cover" src={img} alt="vote" />
                <div className="navigation-bar">
                    <img className="voterookie-logo" src={logo} alt="logo" />
                </div>
            </div>
            <div className="flex-row">
                <div className="rectangle-4"></div>
                <h1 className="text-2">Be part of the change</h1>
            </div>
            <p className="text-1">Your tool for civic participation</p>
        </div>
    )
}

export default Head

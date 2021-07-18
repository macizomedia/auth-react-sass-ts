import React from 'react'

const Progress = ({porcentage}: {porcentage: number}) => {
    return (
        <div className="frame-180">
            <div className="progress-bar">
                <div className="progress-bar-porcentage">{`${JSON.stringify(porcentage)}%`}</div></div>
        </div>
    )
}

export default Progress

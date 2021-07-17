import React from 'react'
import logo from '../../assets/img/logo.png'
import Message from './Message'

import { useAuthState } from '../../useAuth'

const message = {
    title: 'Hello! Great that you are joining',
    span: 'Vote Rookie!',
    content:
        'To personalise Vote Rookie for you, I would like to ask you a few questions.',
    foot: 'Please fill in the details below',
}
const message_on = {
    title: 'Verify your email',
    content:
        'Almost there! We’ve sent a verification email to s***@email.com. You need to verify your email to log in to VoteRookie',
}

const Header = () => {
    let state = useAuthState()
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
            <Message
                title={state.verify ? message_on.title : message.title}
                span={state.verify ? '' : message.span}
                content={state.verify ? message_on.content : message.content}
                foot={state.verify ? '' : message.foot}
            />

        </div>
    )
}

export default Header

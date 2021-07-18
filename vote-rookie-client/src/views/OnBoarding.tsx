import React from 'react'
import Form from 'components/Commons/Form'
import Header from 'components/Commons/Header'
/* import 'react-onboarding-pro/build/index.css' */
/* import Onboarding from 'react-onboarding-pro' */

import { useAuthState } from '../useAuth'
import Avatar from 'components/Commons/Avatar'

export const OnBoarding = () => {
    const state = useAuthState()

    let isVerify = state.verify
    return (
        <>
            <Header />
            {isVerify && <Avatar />}
            {!isVerify && <Form />}
        </>
    )
}

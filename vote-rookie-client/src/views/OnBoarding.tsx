import React from 'react'
import Form from 'components/Commons/Form'
import Footer from 'components/Footer'

import { useAuthState } from '../useAuth'
import Header from 'components/Commons/Header'

export const OnBoarding = () => {
    const state = useAuthState()

    let isVerify = state.verify
    return (
        <div>
            <Header/>
            <Form isVerify={isVerify}/>
            
            <Footer></Footer>
        </div>
    )
}

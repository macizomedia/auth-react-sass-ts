import React from 'react'

// Container
import Form from 'components/Commons/Form'
import Footer from 'components/Footer'
import { Header } from 'components/OnBoarding/Header'

const Login = () => {
    return (
        <div>
            <Header />
            <Form isVerify={true} />

            <p className="text-foot">
                <span>
                    <span>Don’t have an account?</span>
                    <span className="span-foot"> Sign Up</span>
                </span>
            </p>
            <Footer></Footer>
        </div>
    )
}

export default Login

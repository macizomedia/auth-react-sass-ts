/**
 * @abstract
 */
import React, { Suspense } from 'react'
import { AppRoutes } from './router'
import { AuthProvider } from './useAuth'
import { load } from './store'
import './assets/sass/main.scss'
load('welcome')
interface State {
    id?: number
    email?: string
    phone?: string
    password?: string
    verify?: boolean
    token?: string
    message?: string
    email_verified_at?: string
    avatar?: string
    interest?: any[]
    settings?: {}
    store?: []
}

const defaultState: State = {
    email: 'guest@voteRookie.com',
}
function App() {
    return (
        <div>
            <Suspense fallback={<span>waiting...</span>}>
                <AuthProvider initialState={defaultState}>
                    <AppRoutes />
                </AuthProvider>
            </Suspense>
        </div>
    )
}

export default App

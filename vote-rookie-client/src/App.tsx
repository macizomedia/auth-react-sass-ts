/**
 * @abstract
 */
import React, { Suspense } from 'react'
import { AppRoutes } from './router'
import { AuthProvider } from './useAuth'
import { State } from './useAuth'
import './assets/sass/main.scss'

const defaultState: State = {
    name: 'arepa',
    confirmEmail: 'guest@voteRookie.com',
    verify: false,
}
function App() {
    return (
        <>
            <Suspense fallback={<span>waiting...</span>}>
                <AuthProvider initialState={defaultState}>
                    <AppRoutes />
                </AuthProvider>
            </Suspense>
        </>
    )
}

export default App

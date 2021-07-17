/**
 * @abstract
 */
import React, { Suspense } from 'react'
import { AppRoutes } from './router'
import { AuthProvider } from './useAuth'
import './assets/sass/main.scss'

import { State } from './useAuth'

const defaultState: State = {
    name: 'arepa',
    confirmEmail: 'guest@voteRookie.com',
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

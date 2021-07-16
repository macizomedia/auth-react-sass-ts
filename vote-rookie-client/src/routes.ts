import Home from './views/Home'
import { Welcome } from './views/Welcome'
import { OnBoarding } from './views/OnBoarding'
import Subscribe from './views/Subscribe'
import { Logout } from './views/Logout'
import { NotFound } from './views/NotFound'

const Routes = [
    {
        path: '/',
        component: Home,
        isPrivate: false,
    },
    {
        path: '/welcome',
        component: Welcome,
        isPrivate: true,
    },
    {
        path: '/subscribe',
        component: Subscribe,
        isPrivate: false,
    },
    {
        path: '/register',
        component: OnBoarding,
        isPrivate: false,
    },
    {
        path: '/login',
        component: Home,
        isPrivate: false,
    },
    {
        path: '/logout',
        component: Logout,
        isPrivate: false,
    },
    {
        path: '/*',
        component: NotFound,
        isPrivate: false,
    },
]

export default Routes

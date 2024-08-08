import Sport from '../pages/Sport'
import Statistics from '../pages/Statistics'
import User from '../pages/User'

const routes = [
    {
        path: '/',
        element: <Statistics />
    },
    {
        path: '/users',
        element: <User />
    },
    {
        path: '/deportes',
        element: <Sport />
    }
]

export default routes
import Sport from '../pages/Sport'
import Statistics from '../pages/Statistics'
import User from '../pages/User'
import Tournament from '../pages/Tournament'
import Game from '../pages/Game'

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
    },
    {
        path: '/torneos',
        element: <Tournament />
    },
    {
        path: '/game',
        element: <Game/>
    }
]

export default routes
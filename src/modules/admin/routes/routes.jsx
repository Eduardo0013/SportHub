import Sport from '../pages/Sport'
import Statistics from '../pages/Statistics'
import User from '../pages/User'
import Tournament from '../pages/Tournament'
import Game from '../pages/Game'
import Team from '../pages/Team'

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
        path: '/games',
        element: <Game />
    },
    {
        path: '/teams',
        element: <Team />
    }
]

export default routes
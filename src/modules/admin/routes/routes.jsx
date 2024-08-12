import Sport from '../pages/Sport'
import Statistics from '../pages/Statistics'
import User from '../pages/User'
import Tournament from '../pages/Tournament'
import Game from '../pages/Game'
import Team from '../pages/Team'
import Medical from '../pages/Medical'

const routes = [
    {
        path: 'dashboard',
        element: <Statistics />
    },
    {
        path: 'users',
        element: <User />
    },
    {
        path: 'deportes',
        element: <Sport />
    },
    {
        path: 'torneos',
        element: <Tournament />
    },
    {
        path: 'games',
        element: <Game />
    },
    {
        path: 'teams',
        element: <Team />
    },
    {
        path: 'medical',
        element: <Medical/>
    }
]

export default routes
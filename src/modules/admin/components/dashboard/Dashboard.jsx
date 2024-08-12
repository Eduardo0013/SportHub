import Sidebar from "@Modules/core/components/sidebar/Sidebar"
import stylesheet from './dashboard.module.css'
import { Outlet } from "react-router-dom"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState('loading...')

    useEffect(() => {
        const userJson = JSON.parse(localStorage.getItem('user'))
        setUser(userJson)
    }, [])

    const handleClickLogout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={stylesheet.Dashboard}>
            <Sidebar>
                <Sidebar.Header>
                    SportHub
                </Sidebar.Header>
                <Sidebar.Button to='/admin/dashboard'>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    Dashboard
                </Sidebar.Button>
                <Sidebar.Button to='/admin/users'>
                    <span className="material-symbols-outlined">
                        group
                    </span>
                    Users
                </Sidebar.Button>
                <Sidebar.Button to='/admin/deportes'>
                    <span className="material-symbols-outlined">
                        sports_soccer
                    </span>
                    Deportes
                </Sidebar.Button>
                <Sidebar.Button to='/admin/torneos'>
                    <span className="material-symbols-outlined">
                        emoji_events
                    </span>
                    Torneos
                </Sidebar.Button>
                <Sidebar.Button to='/admin/games'>
                    <span className="material-symbols-outlined">
                        stadia_controller
                    </span>
                    Partidos
                </Sidebar.Button>
                <Sidebar.Button to='/admin/teams'>
                    <span className="material-symbols-outlined">
                        group
                    </span>
                    Equipos
                </Sidebar.Button>
                <Sidebar.Button to='/admin/medical'>
                    <span className="material-symbols-outlined">
                        vital_signs
                    </span>
                    Médico
                </Sidebar.Button>
                <Sidebar.Footer>
                    <span className="material-symbols-outlined">
                        account_circle
                    </span>
                    {user?.nombre}
                    <button className="self-end ml-auto cursor-pointer" onClick={handleClickLogout}>
                        <span className="material-symbols-outlined">
                            logout
                        </span>
                    </button>
                </Sidebar.Footer>
            </Sidebar>
            <div className={stylesheet['Dashboard-display']}>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard
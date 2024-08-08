import Sidebar from "@Modules/core/components/sidebar/Sidebar"
import stylesheet from './dashboard.module.css'
import { Outlet } from "react-router-dom"

const Dashboard = () => {
    return (
        <div className={stylesheet.Dashboard}>
            <Sidebar>
                <Sidebar.Header>
                    SportHub
                </Sidebar.Header>
                <Sidebar.Button to='/'>
                    <span className="material-symbols-outlined">
                        home
                    </span>
                    Dashboard
                </Sidebar.Button>
                <Sidebar.Button to='/users'>
                    <span className="material-symbols-outlined">
                        group
                    </span>
                    Users
                </Sidebar.Button>
                <Sidebar.Button to='/deportes'>
                    <span className="material-symbols-outlined">
                        sports_soccer
                    </span>
                    Deportes
                </Sidebar.Button>
                <Sidebar.Button>
                    <span className="material-symbols-outlined">
                        emoji_events
                    </span>
                    Torneos
                </Sidebar.Button>
                <Sidebar.Button>
                    <span className="material-symbols-outlined">
                        stadia_controller
                    </span>
                    Partidos
                </Sidebar.Button>
            </Sidebar>
            <div className={stylesheet['Dashboard-display']}>
                <Outlet/>
            </div>
        </div>
    )
}

export default Dashboard
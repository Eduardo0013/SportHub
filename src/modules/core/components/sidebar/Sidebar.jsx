import stylesheet from './sidebar.module.css'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ children, ...props }) => {
    return (
        <div className={stylesheet.Sidebar} {...props}>
            {children}
        </div>
    )
}

const Header = ({ children }) => {
    return (
        <div className={stylesheet['Sidebar-header']}>
            {children}
        </div>
    )
}

const Button = ({ children, ...props }) => {
    return (
        <NavLink className={
            ({ isActive, isPending }) => isActive
                ? `${stylesheet['Sidebar-button']} ${stylesheet['Sidebar-button.is-active']}`
                : stylesheet['Sidebar-button']} {...props}>
            {children}
        </NavLink>
    )
}

const Footer = ({ children, ...props }) => {
    return (
        <div className={stylesheet['Sidebar-footer']} {...props}>
            {children}
        </div>
    )
}

Sidebar.Button = Button
Sidebar.Header = Header
Sidebar.Footer = Footer

export default Sidebar
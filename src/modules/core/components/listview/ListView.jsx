import stylesheet from './listview.module.css'

const ListView = ({ children, ...props }) => {
    return (
        <div className={stylesheet.ListView} {...props}>
            {children}
        </div>
    )
}

const Header = ({children, ...props}) => {
    return (
        <div className={stylesheet['ListView-header']} {...props}>
            {children}
        </div>
    )
}

const Row = ({ children, ...props }) => {
    return (
        <div className={stylesheet['ListView-row']} {...props}>
            {children}
        </div>
    )
}

const Details = ({ title, subtitle, ...props }) => {
    return (
        <div className={stylesheet['ListView-row_container']} {...props}>
            <span className={stylesheet['ListView-row_title']}>
                {title}
            </span>
            <span className={stylesheet['ListView-row_subtitle']}>
                {subtitle}
            </span>
        </div>
    )
}

ListView.Row = Row
ListView.Details = Details
ListView.Header = Header

export default ListView
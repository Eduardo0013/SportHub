import stylesheet from './bubble.module.css'

const Bubble = ({ children, ...props }) => {
    return (
        <div className={stylesheet.Bubble} {...props}>
            {children}
        </div>
    )
}

const Item = ({children, ...props}) => {
    return (
        <div className={stylesheet['Bubble-item']} {...props}>
            {children}
        </div>
    )
}

Bubble.Item = Item

export default Bubble
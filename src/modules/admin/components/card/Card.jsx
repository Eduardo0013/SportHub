const Card = ({children, ...props}) => {
    return (
        <div 
            className="flex gap-2 border overflow-hidden bg-white p-3 rounded-md shadow-sm items-center" {...props}>
            { children }
        </div>
    )
}

const Icon = ({ children, ...props }) => (
    <div 
        className='bg-indigo-200 rounded-md p-2 text-indigo-600' {...props}>
        {children}
    </div>
)

const Body = ({ children, ...props}) => (
    <div 
        className='flex flex-col' {...props}>
        {children}
    </div>
)

Card.Icon = Icon
Card.Body = Body

export default Card
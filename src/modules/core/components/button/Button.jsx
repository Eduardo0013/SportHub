const Button = ({children,className = '', ...props}) => {
    return (
        <button
            className={`bg-indigo-600 p-2 text-white rounded-md font-semibold hover:bg-indigo-500 flex items-center justify-center ${className}`} 
            {...props}>
            {children}
        </button>
    )
}

export default Button
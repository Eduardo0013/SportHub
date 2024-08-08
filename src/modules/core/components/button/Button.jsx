import { Link } from "react-router-dom"

const Button = ({children,className = '', ...props}) => {
    return (
        <button
        className={`bg-indigo-600 p-3 text-white rounded-md font-bold hover:bg-indigo-500 ${className}`} 
        {...props}>
            {children}
        </button>
    )
}

export default Button
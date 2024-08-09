import { Link } from "react-router-dom"

const ButtonLink = ({ children, ...props }) => {
    return (
        <Link
            className='text-indigo-600 font-semibold hover:text-indigo-900 flex items-center'
            href='#'
            {...props}>
            {children}
        </Link>
    )
}

export default ButtonLink
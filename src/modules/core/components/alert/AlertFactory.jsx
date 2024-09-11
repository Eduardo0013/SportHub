import ErrorAlert from './ErrorAlert'
import SuccessAlert from './SuccessAlert'

const AlertFactory = ({ children, type = 'error', ...props }) => {
    if (type === 'error') {
        return <ErrorAlert>
            {children}
        </ErrorAlert>
    } else if (type === 'success') {
        return <SuccessAlert>
            {children}
        </SuccessAlert>
    }
    return (
        <div className="flex items-center p-4 mx-2 bg-red-100 rounded text-red-900 font-semibold text-sm" {...props}>
            {children}
        </div>
    )
}

export default AlertFactory
const Alert = ({ children, type = 'error', ...props }) => {
    if (type === 'error') {
        return <div className="flex items-center p-4 mx-2 gap-2 bg-red-100 rounded text-red-900 font-medium text-sm" {...props}>
            <span className="material-symbols-outlined">
                cancel
            </span>
            {children}
        </div>
    } else if (type === 'success') {
        return <div className="flex items-center p-4 mx-2 gap-2 bg-green-100 rounded text-green-900 font-medium text-sm" {...props}>
            <span className="material-symbols-outlined">
                check_circle
            </span>
            {children}
        </div>
    }
    return (
        <div className="flex items-center p-4 mx-2 bg-red-100 rounded text-red-900 font-semibold text-sm" {...props}>
            {children}
        </div>
    )
}

export default Alert
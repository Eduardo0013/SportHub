const SuccessAlert = ({children, ...props}) => {
    return (
        <div className="flex items-center p-4 mx-2 gap-2 bg-green-100 rounded text-green-900 font-medium text-sm" {...props}>
            <span className="material-symbols-outlined">
                check_circle
            </span>
            {children}
        </div>
    )
}

export default SuccessAlert
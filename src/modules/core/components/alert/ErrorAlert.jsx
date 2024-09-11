const AlertError = ({children, ...props}) => {
    return (
        <div className="flex flex-col p-4 mx-2 gap-2 bg-red-100 rounded max-w-full text-red-900 font-medium text-sm overflow-y-scroll" {...props}>
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">
                    cancel
                </span>
                Error
            </div>
            {children}
        </div>
    )
}

export default AlertError
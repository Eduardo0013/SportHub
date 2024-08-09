const SecondaryButton = ({ children, ...props }) => {
    return (
        <button
            className="text-gray-800 border border-gray-300 shadow-sm hover:bg-gray-100 p-4 rounded-md font-semibold" 
            {...props}>
            {children}
        </button>
    )
}

export default SecondaryButton
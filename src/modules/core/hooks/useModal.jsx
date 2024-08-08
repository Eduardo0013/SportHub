import { useState } from "react"

const useModal = () => {
    const [isActive, setIsActive] = useState(false)

    const handleOpen = () => {
        setIsActive(true)
    }

    const handleClose = () => {
        setIsActive(false)
    }
    
    return {
        isActive,
        handleClose,
        handleOpen
    }
}

export default useModal
import { useEffect, useState } from "react"

const useComboBox = () => {
    const [isActive, setIsActive] = useState(false)
    
    const handleOnFocus = () => {
        setIsActive(true)
    }
    const handleOnBlur = () => {
        setIsActive(false)
    }

    return {
        isActive,
        handleOnFocus,
        handleOnBlur
    }
}

export default useComboBox
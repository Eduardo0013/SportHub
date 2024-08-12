import { useState } from "react"

const useComboBox = () => {
    const [isActive, setIsActive] = useState(false)
    const [value, setValue] = useState('')

    const handleClick = (ev) => {
        const $item = ev.target
        if($item.dataset.id && $item.dataset.name){
            setValue({
                id: $item.dataset.id,
                name: $item.dataset.name
            })
        }
        setIsActive(false)
    }
    const handleChange = (e) => {
        setValue(e.target.value)
    };
    const handleFocus = () => {
        setIsActive(true)
    }
    const handleBlur = (ev) => {
        const $target = ev.target
        if (!$target.className.includes('Form-combobox') && !$target.className.includes('Form-combobox_floating-menu') && !$target.className.includes('Form-combobox_item') && !$target.dataset.isCombo) {
            setIsActive(false)
        }
    }

    return {
        isActive,
        value,
        handleFocus,
        handleBlur,
        handleClick,
        handleChange
    }
}

export default useComboBox
import { useEffect, useRef } from 'react'
import stylesheet from './form.module.css'
import useComboBox from '../../hooks/useComboBox'

const ComboBox = ({ children, ...props }) => {
    const comboRef = useRef(null)
    const { isActive, handleFocus, handleBlur, handleClick, handleChange, value } = useComboBox()

    useEffect(() => {
        document.addEventListener('click', handleBlur)
    }, [])

    useEffect(() => {
        const $combo = comboRef.current
        $combo.value = value.name || ''
    },[value])

    return (
        <div className={stylesheet['Form-combobox']}>
            <input
                data-is-combo={true}
                type="text"
                className={stylesheet['Form-control']}
                onFocus={handleFocus}
                onChange={handleChange}
                ref={comboRef}
                {...props} />
            {isActive && <div className={stylesheet['Form-combobox_floating-menu']} id='combobox-floating-menu' onClick={handleClick}>
                {children}
            </div>}
        </div>
    )
}

const Item = ({ children, ...props }) => {
    return (
        <div className={stylesheet['Form-combobox_item']} {...props}>
            {children}
        </div>
    )
}

ComboBox.Item = Item

export default ComboBox
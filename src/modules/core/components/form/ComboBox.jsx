import stylesheet from './form.module.css'
import useComboBox from '../../hooks/useComboBox'

const ComboBox = ({ children, ...props }) => {
    const { isActive, handleOnFocus, handleOnBlur } = useComboBox()
    return (
        <div className={stylesheet['Form-combobox']}>
            <input
                type="text"
                className={stylesheet['Form-control']}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                {...props} />
            {isActive && <div className={stylesheet['Form-combobox_floating-menu']} id='combobox-floating-menu'>
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
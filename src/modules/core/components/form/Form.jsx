import stylesheet from './form.module.css'

const Form = ({children,className='', ...props}) => {
    return (
        <form className={`${stylesheet.Form} ${className}`} {...props}>
            {children}
        </form>
    )
}

const Label = ({children,...props}) => {
    return (
        <label className={stylesheet['Form-label']} {...props}>
            {children}
        </label>
    )
}

const Group = ({children, ...props}) => {
    return (
        <div className={stylesheet['Form-group']} {...props}>
            {children}
        </div>
    )
}

const Control = ({children, type='text',...props}) => {
    return (
        <input 
        className={stylesheet['Form-control']} 
        type={type} 
        {...props} />
    )
}

Form.Group = Group
Form.Control = Control
Form.Label = Label

export default Form
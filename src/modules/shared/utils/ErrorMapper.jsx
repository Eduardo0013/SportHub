/**
 * 
 * @param {Object} errors 
 * @returns {Object}
 */
const errorMapper = (errors) => {
    const messages = []
    for (const error in errors) {
        messages.push(errors[error].msg)
    }   
    return messages
}

export default errorMapper
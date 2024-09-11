/**
 * 
 * @param {FormData} formData 
 * @returns {JSON}
 */
const formJsonConverter = (formData) => {
    const json = {}
    formData.forEach((value, key) => json[key] = value)
    return json
}

export default formJsonConverter
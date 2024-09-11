const headers = {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json'
}

/**
 * 
 * @param {String} url 
 * @param {JSON} body 
 * @param {String} authorization 
 * @returns {Promise<Response>}
 */
export const post = async (url,body, authorization = null) => {
    if(authorization){
        headers['Authorization'] = authorization
    }
    const request = await fetch(url,{
        method : 'POST',
        headers,
        body
    })
    return request
}

/**
 * 
 * @param {String} url 
 * @param {String} authorization 
 * @returns {Promise<Response>}
 */
export const get = async (url,authorization = null) => {
    if(authorization){
        headers['Authorization'] = authorization
    }
    return await fetch(url,{
        method: 'GET',
        headers
    })
}

/**
 * 
 * @param {String} url 
 * @param {JSON} body 
 * @param {String} authorization 
 * @returns {Promise<Response>}
 */
export const patch = async (url,body,authorization = null) => {
    if(authorization){
        headers['Authorization'] = authorization
    }
    return await fetch(url,{
        method: 'PATCH',
        headers,
        body
    })
}

/**
 * 
 * @param {String} url 
 * @param {JSON} body 
 * @param {String} authorization 
 * @returns {Promise<Response>}
 */
export const put = async (url,body, authorization = null) => {
    if(authorization){
        headers['Authorization'] = authorization
    }
    return await fetch(url,{
        method: 'PUT',
        headers,
        body
    })
}

/**
 * 
 * @param {String} url 
 * @param {JSON} body 
 * @param {String} authorization 
 * @returns {Promise<Response>}
 */
export const delete_ = async (url, body, authorization = null) => {
    if(authorization){
        headers['Authorization'] = authorization
    }
    return await fetch(url, {
        method: 'DELETE',
        headers,
        body
    })
}
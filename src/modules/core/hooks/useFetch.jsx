import { useEffect, useState } from "react"
import NetworkException from "../errors/NetworkException"

const useFetch = (endpoint) => {
    const [error,setError] = useState(null)
    const [loading,setLoading] = useState(true)
    const [value,setValue] = useState(null)

    useEffect(() => {           
        (async () => {
            try {                
                const response = await fetch(endpoint)
                const value = await response.json()
                if(!response.ok){
                    throw NetworkException()
                }
                setValue(value)
            } catch (error) {
                setError(error)
            }finally {
                setLoading(false)
            }
        })();
    },[endpoint])

    return [
        loading,
        value,
        error
    ]
}

export default useFetch
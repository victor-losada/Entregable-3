import axios from 'axios'
import React, { useState } from 'react'

const useFetch = (url) => {
    const [response, setResponse] = useState()
    const [hasError, setHasError] = useState(false)

    const getApi = () => {
        axios.get(url)
        .then(res => {
            setResponse(res.data)
            setHasError(false)
        })
        .catch(err => {
            console.log(err)
            setHasError(true)
        })
    }
    return [response, getApi, hasError]

    // retornamos lo oque vamos a ocupar en la aplicacion👆
}

export default useFetch
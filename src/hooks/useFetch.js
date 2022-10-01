import React, { useState } from 'react'

const useFetch = () => {
    const [response, setResponse] = useState()

    useEffect(() => {
        axios.get(URL)
             .then(res => setResponse(res.data))
             .catch(err => console.log(err))
    },[])
  return response
}

export default useFetch

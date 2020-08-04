import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetcher(url) {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [data, setData] = useState([])

    useEffect(() => {
        setLoading(true)

        axios
            .get(url)
            .then(({ data }) => {
                setData(data.meals)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [url])

    return { loading, error, data }

}

export default useFetcher
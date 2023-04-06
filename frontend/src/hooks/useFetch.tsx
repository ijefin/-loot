import { useState, useEffect } from "react"

// custom hook
export const useFetch = (url: string) => {


    const [data, setData]: any = useState()
    const [config, setConfig]: any = useState(null)
    const [method, setMethod]: any = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [itemId, setItemId] = useState()

    const httpConfig = (data: any, method: string) => {
        if (method === "POST") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
        }

        if (method === "DELETE") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                }
            })

            setMethod(method)
            setItemId(data)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)

            try {
                const response = await fetch(url)

                const json = await response.json()
                setData(json)

            } catch (error) {
                console.log(error)
                setError("Houve um erro ao carregar os dados")
            }

            setLoading(false)
        }

        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            let json

            if (method === "POST") {
                let fetchOptions = [url, config] as const

                const res = await fetch(...fetchOptions)

                json = await res.json()

            }

            if (method === "DELETE") {
                const res = await fetch(`${url}/${itemId}`, config)
                json = await res.json()

                setCallFetch(json)
            }

            setCallFetch(json)

        }



        httpRequest()
    }, [config, method, url])

    return { data, httpConfig, loading, error }

}

import { useState, useEffect } from "react"
import { toast } from 'react-toastify';

// custom hook
export const useFetch = () => {

    const [data, setData]: any = useState()
    const [config, setConfig]: any = useState(null)
    const [method, setMethod]: any = useState(null)
    const [callFetch, setCallFetch] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [taskId, setTaskId] = useState()


    const httpConfig = (data: any, method: string, callback?: () => void) => {
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
            setTaskId(data)
        }

        if (callback) {
            callback();
        }

        if (method === "PUT") {
            setConfig({
                method,
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })

            setMethod(method)
            setTaskId(data.id)
        }
    }

    useEffect(() => {
        const fetchData = async () => {

            setLoading(true)
            try {
                const response = await fetch("http://localhost:3030/all-tasks")

                const json = await response.json()
                setData(json)

            } catch (error: any) {
                toast.error("houve um erro")
            }

            setLoading(false)
        }

        fetchData()
    }, [callFetch])

    useEffect(() => {
        const httpRequest = async () => {
            let json

            if (method === "POST") {
                let fetchOptions = ["http://localhost:3030/new-task", config] as const

                const res = await fetch(...fetchOptions)

                json = await res.json()

                setMessage(json.message)
                res.status !== 201 ? toast.error(json.message) : toast.success(json.message)
            }

            if (method === "DELETE") {
                const res = await fetch(`${"http://localhost:3030/delete-task"}/${taskId}`, config)
                json = await res.json()

                setMessage(json.message)
                res.status === 400 ? toast.error(json.message) : toast.success(json.message)
                setCallFetch(json)
            }

            if (method === "PUT") {
                const res = await fetch(`${"http://localhost:3030/update-task"}/${taskId}`, config)
                json = await res.json()

                setMessage(json.message)
                res.status === 400 ? toast.error(json.message) : toast.success(json.message)
                setCallFetch(json)
            }

            setCallFetch(json)
        }

        httpRequest()
    }, [config, method, taskId])

    return { data, httpConfig, loading, error, message }

}
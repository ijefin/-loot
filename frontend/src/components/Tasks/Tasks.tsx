import { TaskCard } from "../Cards/TaskCard"
import { useFetch } from "../../hooks/useFetch"
import "./Tasks.css"


export const Tasks = () => {

    interface task {
        id: number
        name: string
        description: string
        done: boolean
    }

    const url = "http://localhost:3030/all-tasks";

    const { data: task, loading, error } = useFetch(url)

    console.log(task)

    return (
        <>
            <div className="main-task-container">

            </div>
        </>

    )
}

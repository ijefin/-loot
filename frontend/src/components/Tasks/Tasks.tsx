import { TaskCard } from "../Cards/TaskCard"
import { useFetch } from "../../hooks/useFetch"
import "./Tasks.css"
import { useState } from "react"


export const Tasks = () => {
    interface task {
        id: number
        name: string
        description: string
        done: boolean
    }

    const { data: task, loading, error, httpConfig, message } = useFetch()

    const [name, setTaskName] = useState(String)
    const [description, setTaskdescription] = useState(String)
    const [done, setDone] = useState(Boolean)
    const [taskId, setTaskId]: any = useState()

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const newTask = {
            name,
            description
        }

        httpConfig(newTask, "POST")

        setTaskName("")
        setTaskdescription("")
    }

    const handleDelete = (id: number) => {

        setTaskId(id)

        httpConfig(taskId, "DELETE")
    }

    console.log(taskId)

    return (
        <>
            <div className="container">
                <div className="sub-container">
                    <div className="form-container">
                        <label>
                            <h3>Adicionar nova tarefa</h3>
                        </label>
                        <form onSubmit={handleSubmit}>
                            <input minLength={2} value={name} onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Nome/Categoria" />
                            <input value={description} onChange={(e) => setTaskdescription(e.target.value)} type="text" placeholder="Descrição" />
                            <input className="done" type="submit" value={"OK"} />
                        </form>
                        <hr />
                        <div className="menu">
                            <ul>
                                <li>Todas</li>
                                <li>Pendentes</li>
                                <li>Concluidas</li>
                            </ul>
                        </div>
                        <hr />
                        <div style={{ overflow: "auto" }} className="test">
                            <div className="task-container">
                                <div className="task-card-container">
                                    {loading && <h3>Carregando tarefas..</h3>}
                                    {
                                        task && task.map((tasks: task) => (
                                            <TaskCard updateFunc={() => console.log(tasks)} deleteFunc={() => setTaskId(tasks.id)} key={tasks.id} name={tasks.name} description={tasks.description} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>

    )
}


{/* <div className="task-container">
<div className="task-status">
    <h3>Em progresso</h3>

   
</div>
<div className="task-status">
    <h3>Finalizadas</h3>
    {loading && <h3>Carregando tarefas..</h3>}
    <div className="task-card-container">
        {
            task && task.map((tasks: task) => (
                tasks.done && <TaskCard name={tasks.name} description={tasks.description} />
            ))
        }
    </div>
</div>
</div> */}
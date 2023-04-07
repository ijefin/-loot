import { TaskCard } from "../Cards/TaskCard"
import { useFetch } from "../../hooks/useFetch"
import "./Tasks.css"
import { useState } from "react"


export const Tasks = () => {

    interface Task {
        id: number
        name: string
        description: string
        done: boolean
    }

    const { data: task, loading, error, httpConfig, message } = useFetch()

    const [name, setTaskName] = useState("")
    const [description, setTaskdescription] = useState("")
    const [done, setDone] = useState(Boolean)
    const [selectedTask, setSelectedTask]: Task | any = useState()
    const [newName, setNewName] = useState()
    const [newDescription, setNewDescription] = useState()

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

    const handleDelete = () => {

        const selectedId = selectedTask.id

        httpConfig(selectedId, "DELETE")
    }

    const handleUpdate = () => {

        console.log(selectedTask)
    }

    return (
        <>
            <div
                className="modal fade"
                id="delete-modal"
                tabIndex={-1}
                aria-labelledby="myModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModal">
                                Deseja excluir essa tarefa?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <h1>{selectedTask?.name}</h1>
                            <p>{selectedTask?.description}</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                style={{ backgroundColor: "#22b700" }}
                                id="modal-confirm"
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                                onClick={handleDelete}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div >

            <div
                className="modal fade"
                id="update-modal"
                tabIndex={-1}
                aria-labelledby="myModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModal">
                                Atualizar tarefa
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <input onChange={(e) => setTaskName(e.target.value)} defaultValue={selectedTask?.name} type="text" />
                            <input onChange={(e) => setTaskdescription(e.target.value)} defaultValue={selectedTask?.description} type="text" />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                style={{ backgroundColor: "#22b700" }}
                                id="modal-confirm"
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                                onClick={handleUpdate}
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div >
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
                                        task && task.map((tasks: Task) => (
                                            <TaskCard getTaskInfo={() => setSelectedTask(tasks)} key={tasks.id} name={tasks.name} description={tasks.description} />
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
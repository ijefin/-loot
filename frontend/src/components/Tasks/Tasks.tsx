import { TaskCard } from "../Cards/TaskCard"
import { useFetch } from "../../hooks/useFetch"
import "./Tasks.css"
import { useEffect, useState } from "react"


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
    const [selectedTask, setSelectedTask]: any = useState("")
    const [isChecked, setIsChecked] = useState(false);

    console.log(selectedTask.done)

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

    const handleDelete = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const selectedId = selectedTask.id

        httpConfig(selectedId, "DELETE")
    }
    const handleUpdate = async (e: { preventDefault: () => void }) => {
        e.preventDefault();

        const updatedTask = {
            id: selectedTask.id,
            name: name ? name : selectedTask.name,
            description: description ? description : selectedTask.description,
            done: isChecked,
            status: isChecked ? "Concluida" : "pending",
        };

        httpConfig(updatedTask, "PUT");

        setTaskName("");
        setTaskdescription("");
    };

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

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
                            <label htmlFor="done-checkbox">Marcar como concluído.</label>
                            <input id="done-checkbox" onChange={handleOnChange} className="form-check-input" type="checkbox" />
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
                            <input minLength={2} onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Nome/Categoria" />
                            <input onChange={(e) => setTaskdescription(e.target.value)} type="text" placeholder="Descrição" />
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
                                            <TaskCard done={handleOnChange} getTaskInfo={() => setSelectedTask(tasks)} key={tasks.id} name={tasks.name} description={tasks.description} />
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
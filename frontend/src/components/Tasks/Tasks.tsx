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
        status: string
    }

    const { data: task, loading, error, httpConfig, message } = useFetch()

    const [name, setTaskName] = useState("")
    const [done, setDone] = useState(false);
    const [description, setTaskdescription] = useState("")
    const [selectedTaskName, setSelectedTaskName] = useState("");
    const [selectedTaskDescription, setSelectedTaskDescription] = useState("");
    const [selectedTaskId, setSelectedTaskID]: any = useState();
    const [isChecked, setIsChecked] = useState(false);
    const [isDirty, setIsDirty] = useState(true);

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const newTask = {
            name,
            description
        }

        httpConfig(newTask, "POST", () => {
            setTaskdescription("");
            setTaskName("");
        });

    }

    const handleSetValues = (name: string, description: string, id: number, done: boolean) => {
        setSelectedTaskName(name)
        setSelectedTaskDescription(description)
        setSelectedTaskID(id)
        setIsChecked(done)
    }

    const handleDelete = async (e: { preventDefault: () => void; }) => {
        e.preventDefault()

        const selectedId = selectedTaskId

        httpConfig(selectedId, "DELETE")
    }
    const handleUpdate = async () => {

        const updatedTask = {
            id: selectedTaskId,
            name: selectedTaskName,
            description: selectedTaskDescription,
            done: isChecked,
            status: isChecked ? "Concluida" : "Pendente",
        };

        httpConfig(updatedTask, "PUT", () => {
            setTaskName("");
            setTaskdescription("");
            setSelectedTaskName("")
            setSelectedTaskDescription("")
            setSelectedTaskID("")
            setDone(false)
        });
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
                            <h1>{selectedTaskName}</h1>
                            <p>{selectedTaskDescription}</p>
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
                            <input onChange={(e) => {
                                setIsDirty(false)
                                setSelectedTaskName(e.target.value)
                            }} value={selectedTaskName} type="text" />
                            <input onChange={(e) => {
                                setIsDirty(false)
                                setSelectedTaskDescription(e.target.value)
                            }} value={selectedTaskDescription} type="text" />
                            <label htmlFor="done-checkbox">Marcar como concluído.</label>
                            <input id="done-checkbox" checked={isChecked} onChange={() => {
                                setIsDirty(false)
                                setIsChecked(!isChecked)
                            }} className="form-check-input" type="checkbox" />
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
                                disabled={isDirty}
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
                            <input minLength={2} value={description} onChange={(e) => setTaskdescription(e.target.value)} type="text" placeholder="Descrição" />
                            <input className="done" type="submit" value={"OK"} />
                        </form>
                        <hr />
                        <div style={{ overflow: "auto" }}>
                            <div className="task-container">
                                <div className="task-card-container">
                                    {loading && <h3>Carregando tarefas..</h3>}
                                    {
                                        task?.length > 0 ? task.map((tasks: Task) => (
                                            <TaskCard getTaskInfo={() => {
                                                handleSetValues(tasks.name, tasks.description, tasks.id, tasks.done)
                                            }} status={tasks.status} key={tasks.id} name={tasks.name} description={tasks.description} />
                                        )) : <h1 style={{ textAlign: "center" }}>Nada por aqui!</h1>
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
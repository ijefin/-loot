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
            <div className="container">
                <div className="top-content">
                    <div className="title">
                        <h3>Organize suas tarefas</h3>
                    </div>
                    <div className="new-task">
                        <button>Nova</button>
                    </div>
                </div>
                <div className="task-container">
                    <div className="task-status">
                        <h3>Em progresso</h3>
                        {loading && <h3>Carregando tarefas..</h3>}
                        <div className="task-card-container">
                            {
                                task && task.map((tasks: task) => (
                                    !tasks.done && <TaskCard name={tasks.name} description={tasks.description} />
                                ))
                            }
                        </div>
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
                </div>
            </div>
        </>

    )
}

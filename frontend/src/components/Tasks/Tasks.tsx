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

    return (
        <>

            <div className="task-container-title">
                <h1>Organize suas tarefas</h1>
                <div className="search-container">
                    <input type="search" placeholder="Digite o nome da tarefa" />
                </div>
                <button>Nova Tarefa</button>
            </div>
            <div className="task-container">
                <div className="in-progress">
                    <div className="cards-container">
                        <h1 className="status-title">Em progresso </h1>
                        <div className="task-card-container">
                            <TaskCard name="Organização" description="teste" />
                            <TaskCard name="Limpeza" description="teste" />
                            <TaskCard name="Estudos" description="teste" />
                            <TaskCard name="Diversão" description="teste" />
                            <TaskCard name="Estudos" description="teste" />
                            <TaskCard name="teste" description="teste" />
                        </div>
                    </div>
                    <div className="cards-container">
                        <h1 className="status-title">Finalizadas </h1>
                        <div className="teste">
                            <h1 className="no-data-message">Ainda não há nada por aqui..</h1>
                        </div>
                    </div>
                </div>
                {/* <div className="done-tasks">
                    {
                        task && task.map((task: task) => (
                            !task.done && <TaskCard name={task.name} description={task.description} />
                        ))
                    }
                </div>
                <div className="not-done-tasks">
                    {
                        task && task.map((task: task) => (
                            task.done && <TaskCard name={task.name} description={task.description} />
                        ))
                    }
                </div> */}
            </div >
        </>

    )
}

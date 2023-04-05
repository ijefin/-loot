import { TaskCard } from "../Cards/TaskCard"
import "./Tasks.css"

export const Tasks = () => {
    return (
        <>
            <div className="title">
                <h1>Lista de tarefas.</h1>
            </div>
            <div className="task-container-title">
                <p>Organize suas tarefas diárias</p>
                <div className="search-container">
                    <input type="search" placeholder="Digite o nome da tarefa" />
                </div>
                <button>Nova Tarefa</button>
            </div>
            <div className="task-status-title">
                <h1>Tarefas Concluídas</h1>
                <h1>Tarefas Não Concluídas</h1>
            </div>
            <div className="task-container">
                <div className="done-tasks">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
                <hr />
                <div className="not-done-tasks">
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </div>
            </div>
        </>

    )
}

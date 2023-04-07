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
                <div className="sub-container">
                    <div className="form-container">
                        <label htmlFor=""><h3>Adicionar nova tarefa</h3></label>
                        <form>
                            <input type="text" placeholder="Nome/Categoria" />
                            <input type="text" placeholder="Descrição" />
                            <input className="done" type="submit" value={"Inserir"} />
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
                        <div style={{ overflow: "auto" }} className="task-container">
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
                            <TaskCard name="test" description="test" />
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
</div> */}
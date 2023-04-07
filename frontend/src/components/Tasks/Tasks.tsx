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

            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>
            <div className="modal fade" id="exampleModalCenter" tabIndex={1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className="box">
                <div className="one">
                    <div className="px-3 pb-4">
                        <div><img src="https://img.icons8.com/bubbles/50/000000/blond-short-hair-lady-with-blue-glasses.png" width="15" className="pic1" /><img src="https://img.icons8.com/bubbles/50/000000/girl-with-chemical-test-tube.png" width="22" className="pic2" /></div>
                        <div><img src="https://img.icons8.com/bubbles/100/000000/girl-with-glasses-art-palette.png" width="65" /></div>
                        <div><img src="https://img.icons8.com/bubbles/50/000000/short-curly-hair-girl-gem.png" width="16" className="pic3" /><img src="https://img.icons8.com/bubbles/50/000000/girl-and-playing-card.png" width="16" className="pic4" /></div>
                        <div><p className="quote">Clique para criar uma nova tarefa</p></div>
                    </div>
                </div>
            </div>
            <div className="container">
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

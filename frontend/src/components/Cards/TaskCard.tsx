import "./TaskCard.css"

interface Task {
    getTaskInfo?: any
    name: string
    description: string
    done?: any
    status: string
}



export const TaskCard = ({ getTaskInfo, name, description, done, status }: Task) => {

    return (
        <>
            {
                <div className="task-card">
                    <div className="task-title">
                        <div className="task-options">
                            <h4>{name}</h4>
                            {
                                status === "Concluida" && <div style={{ color: "green" }}>{status}  <i className="fa-solid fa-check"></i></div>
                            }
                            <div className="task-crud">
                                <button data-bs-toggle="modal"
                                    data-bs-target="#update-modal"
                                    className="button btn m-1 text-light" onClick={getTaskInfo}><i style={{ color: "#fc9003" }} className="fa-solid fa-pen-to-square"></i></button>
                                <button data-bs-toggle="modal"
                                    data-bs-target="#delete-modal"
                                    className="button btn m-1 text-light" onClick={getTaskInfo}><i style={{ color: "#fb1d00" }} className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="task-description"><p>{description}</p></div>
                </div >
            }
        </>
    )
}



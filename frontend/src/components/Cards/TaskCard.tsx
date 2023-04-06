import "./TaskCard.css"
import { useState, useEffect } from "react"

interface Task {
    name: string
    description: string
    done?: boolean
}

export const TaskCard = ({ name, description, done }: Task) => {

    return (
        <>
            {
                <div className="task-card">
                    <div className="task-title">
                        <h1>{name}</h1>
                        <div className="dropdown">
                            <button id="dots" className="dropbtn"></button>
                            <div className="dropdown-content">
                                <button >Concluir <i id='done' className="fa-solid fa-check"></i></button>
                                <button >Editar <i id='edit' className="fa-solid fa-edit"></i></button>
                                <button >Apagar <i id='delete' className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>{description}</p>
                    </div>
                </div>
            }
        </>
    )
}


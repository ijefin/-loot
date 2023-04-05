import "./TaskCard.css"
import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"


export const TaskCard = () => {

    const url = "http://localhost:3030/all-tasks";

    const { data: tasks, loading, error } = useFetch(url)

    console.log(tasks)

    return (
        <>
            <div className="task-card">
                <div className="task-title">
                    <h1>Limpar o quarto</h1>
                </div>
                <div className="card-body">
                    <p>Limpar a o quarto e guardar as roupas</p>
                    <div className="dropdown">
                        <button id="test" className="dropbtn"></button>
                        <div className="dropdown-content">
                            <button >Apagar <i id='delete' className="fa-solid fa-trash"></i></button>
                            <button >Editar <i id='edit' className="fa-solid fa-edit"></i></button>
                            <button >Concluído <i id='done' className="fa-solid fa-check"></i></button>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

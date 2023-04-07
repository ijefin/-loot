import "./TaskCard.css"
import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

interface Task {
    deleteFunc: any
    updateFunc: any
    name: string
    description: string
    done?: boolean
}


export const TaskCard = ({ updateFunc, deleteFunc, name, description, done }: Task) => {
    return (
        <>
            {
                <div className="task-card">
                    <div className="task-title">
                        <input className="form-check-input" type="checkbox" />
                        <div className="task-options">
                            <h4>{name}</h4>
                            <div className="task-crud">
                                <button onClick={updateFunc}><i style={{ color: "#fc9003" }} className="fa-solid fa-pen-to-square"></i></button>
                                <button data-bs-toggle="modal"
                                    data-bs-target="#myModal"
                                    className="button btn m-1 text-light" onClick={deleteFunc}><i style={{ color: "#fb1d00" }} className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="task-description"><p>{description}</p></div>
                </div >
            }
        </>
    )
}



import "./TaskCard.css"
import { useState, useEffect } from "react"
import { useFetch } from "../../hooks/useFetch"

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
                        <input className="form-check-input" type="checkbox" />
                        <div className="task-options">
                            <h4>Organização</h4>
                            <div className="task-crud">
                                <button><i style={{ color: "#fc9003" }} className="fa-solid fa-pen-to-square"></i></button>
                                <button><i style={{ color: "#fb1d00" }} className="fa-solid fa-trash"></i></button>
                            </div>
                        </div>
                    </div>
                    <div className="task-description"><p>Arrumar o quarto e toda a bagunça</p></div>
                </div >
            }
        </>
    )
}



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
                            <div>A</div>
                            <div>A</div>
                            <div>A</div>
                        </div>
                    </div>
                    <div className="task-description"><p>Arrumar o quarto e toda a bagunça</p></div>
                </div >
            }
        </>
    )
}



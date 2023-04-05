import React from 'react'
import "./TaskCard.css"

export const TaskCard = () => {
    return (
        <>
            <div className="task-card">
                <div className="task-title">
                    <p>Lavar Roupa</p>
                </div>
                <div className="card-body">
                    <p>Lavar as roupas pendentes que estão na cama</p>
                </div>
            </div>
        </>
    )
}

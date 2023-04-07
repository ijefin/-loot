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
                <div className="two">
                    <div className="d-flex justify-content-end px-3 pt-1"><i className="mdi mdi-star-outline pr-1 star"></i><i className="mdi mdi-dots-horizontal dot"></i></div>
                    <div className="px-3 pt-3">
                        <h3 className="name">{name}</h3>
                        <p className="quote2">{description}</p>
                    </div>
                    <div className="d-flex justify-content-start px-3 align-items-center">
                        <i className="mdi mdi-view-comfy task"></i>
                    </div>
                    <div className="d-flex justify-content-between  px-3 align-items-center pb-3">
                        <div className="d-flex justify-content-start align-items-center">
                        </div>
                        <div className="d-flex justify-content-end">

                        </div>
                    </div>
                </div>
            }
        </>
    )
}


{/* <div className="dropdown">
<button id="dots" className="dropbtn"></button>
<div className="dropdown-content">
    <button >Concluir <i id='done' className="fa-solid fa-check"></i></button>
    <button >Editar <i id='edit' className="fa-solid fa-edit"></i></button>
    <button >Apagar <i id='delete' className="fa-solid fa-trash"></i></button>
</div>
</div> */}

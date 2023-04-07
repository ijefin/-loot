import React from 'react'

export const Modal = () => {
    return (
        <>
            <div
                className="modal fade"
                id="myModal"
                tabIndex={-1}
                aria-labelledby="myModal"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="myModal">
                                Deseja excluir essa tarefa?
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            Content
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-danger"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button
                                style={{ backgroundColor: "#22b700" }}
                                id="modal-confirm"
                                type="button"
                                className="btn"
                                data-bs-dismiss="modal"
                            >
                                Confirmar
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

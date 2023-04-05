import "./Home.css"

export const Home = () => {
    return (
        <>
            <div className="main-home-container">
                <div className="title">
                    <h1>Quebre seus afazeres <br /> em pequenas tarefas <br /> para uma melhor  <br /> organização.</h1>
                </div>
                <div className="add-new-task">
                    <p>O costume de organizar melhor seu dia-a-dia baseado em tarefas pode deixar sua rotina <br />   mais agradável e mais produtiva</p>
                    <button className="add-new">Nova Tarefa +</button>
                </div>
            </div >
        </>
    )
}

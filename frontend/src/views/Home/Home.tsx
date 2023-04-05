import "./Home.css"
import home from "../../assets/home.png"
import { Tasks } from "../../components/Tasks/Tasks"

export const Home = () => {
    return (
        <>
            <div className="main-home-container">
                <div className="main-content">
                    <div className="title">
                        <h1>Quebre seus afazeres <br /> em pequenas tarefas <br /> para obter mais <br /> produtividade.</h1>
                    </div >
                    <div className="add-new-task">
                        <p>O costume de organizar melhor seu dia a dia <br /> baseado em tarefas pode deixar sua rotina <br />   mais agradável e mais produtiva</p>
                        <button className="add-new"><span className="button-text">Começar</span></button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={home} />
                </div>
            </div >
            <hr />
        </>
    )
}

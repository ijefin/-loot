import "./Home.css"
import home from "../../assets/home.png"
import { Link } from "react-router-dom"

export const Home = () => {
    return (
        <>
            <div className="container">
                <div className="main-home-container">
                    <div className="main-content">
                        <h1>Quebre seus afazeres <br /> em pequenas tarefas <br /> para obter mais <br /> produtividade.</h1>
                        <p>O costume de organizar melhor seu dia a dia <br /> baseado em tarefas pode deixar sua rotina <br />   mais agradável e mais produtiva.</p>
                        <Link to="/tasks-panel">
                            <h2>Começar</h2>
                        </Link>
                    </div >
                    <div className="image-container">
                        <img src={home} />
                    </div>
                </div >
            </div>
        </>
    )
}

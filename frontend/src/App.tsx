import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./views/Home/Home"
import { TasksPanel } from "./views/TaskPanel/TasksPanel"
import "bootswatch/dist/superhero/bootstrap.min.css"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks-panel" element={<TasksPanel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./views/Home/Home"
import { TasksPanel } from "./views/TaskPanel/TasksPanel"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tasks-panel" element={<TasksPanel />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

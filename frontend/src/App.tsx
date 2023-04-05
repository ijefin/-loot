import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./views/Home/Home"


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

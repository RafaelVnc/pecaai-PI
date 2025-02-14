import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    </>
  )
}

export default App

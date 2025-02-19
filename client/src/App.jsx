import Sidebar from "./components/Sidebar"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Pedidos from "./pages/Pedidos";
import Avaliacoes from "./pages/Avaliacoes";
import Dashboard from "./pages/Dashboard";
import Relatorios from "./pages/Relatorios";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cardapio" element={<Cardapio />}/>
          <Route path="/pedidos" element={<Pedidos />}/>
          <Route path="/avaliacoes" element={<Avaliacoes />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/relatorios" element={<Relatorios />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

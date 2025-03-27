import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute"; 
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Pedidos from "./pages/Pedidos";
import Avaliacoes from "./pages/Avaliacoes";
import Dashboard from "./pages/Dashboard";
import Relatorios from "./pages/Relatorios";
import ItemAdd from "./pages/ItemAdd";
import ItemEdit from "./pages/ItemEdit";


const App = () => {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Rota de Login e Cadastro Pública */}
          <Route path="/login" element={<Login />} />
          <Route path="/cadastroEstabelecimento" element={<Cadastro />} />

          {/* Rotas Protegidas */}
          <Route 
            path="/*"
            element={
              <PrivateRoute>
                <Sidebar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/cardapio" element={<Cardapio />} />
                  <Route path="/pedidos" element={<Pedidos />} />
                  <Route path="/avaliacoes" element={<Avaliacoes />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/relatorios" element={<Relatorios />} />
                  <Route path="/itemAdd" element={<ItemAdd />} />
                  <Route path="/itemEdit/:_id" element={<ItemEdit />} />
                </Routes>
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true); // Estado de carregamento
    const navigate = useNavigate();

    useEffect(() => {
      const token = localStorage.getItem("Authorization");
  
      if (token) {
          try {
              // Decodifica o token
              const decodedToken = jwtDecode(token);
              
              // Verifica a data de expiração (exp) do token
              const isExpired = decodedToken.exp * 1000 < Date.now();
              
              if (!isExpired) {
                  setUser(token);
              } else {
                  navigate("/login");
              }
          } catch (error) {
              console.error("Erro ao decodificar o token", error);
          }
      }
  
      setLoading(false); // Depois que a verificação for feita, definimos como carregamento concluído
  }, []);

    const login = (token) => {
        localStorage.setItem("Authorization", `Bearer ${token}`);
        setUser(token);
        navigate("/");
    };

    const logout = () => {
        localStorage.removeItem("Authorization");
        setUser(null);
        navigate("/login");
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

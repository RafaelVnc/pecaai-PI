import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import axios from "axios";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/usuario/login", { email, senha });

            if (response.data.token) {
                login(response.data.token);
            }
        } catch (error) {
            alert("Erro ao fazer login: " + (error.response?.data?.errorMessage || error.errorMessage));
        }
    };

    return (
        <div className="login-form">
                <Link to={"/"} className="login__back-btn"><FontAwesomeIcon icon={faArrowLeft} /> Voltar</Link>
            <img src={logo} />
            <h2>Login</h2>
            <form onSubmit={handleLogin} className="login-form__form">
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="login-form__input login-form__input--email"
                    required
                />
                <br />
                <input 
                    type="password" 
                    placeholder="Senha" 
                    value={senha} 
                    onChange={(e) => setSenha(e.target.value)}
                    className="login-form__input login-form__input--senha" 
                    required
                />
                <br />
                <button type="submit" className="login-form__btn">Entrar</button>
                <Link to="/cadastroEstabelecimento" className="login-form__cadastro-link">Cadastro</Link>
            </form>
        </div>
    );
};

export default Login;

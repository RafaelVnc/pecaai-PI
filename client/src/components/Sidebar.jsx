import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUtensils, faClipboard, faStar, faGauge, faChartColumn, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
import { getNomeEstabelecimento } from "../assets/database/nomeEstabelecimento";


const Sidebar = ( ) => {
  const { logout } = useContext(AuthContext);
  const [nomeEstabelecimento, setNomeEstabelecimento] = useState("");

  useEffect(() => {
    const fetchNomeEstabelecimento = async () => {
      const nome = await getNomeEstabelecimento();
      setNomeEstabelecimento(nome); // Atualiza o estado com o nome do estabelecimento
    };

    fetchNomeEstabelecimento();
  }, []);


  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-top">
          <img src={logo} alt="Logo peça aí!" className='sidebar-top__logo' />
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/home" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faHouse} className='sidebar__icons' />
            <h3>Início</h3>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/cardapio" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faUtensils} className='sidebar__icons' />
            <h3>Meu cardápio</h3>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/pedidos" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faClipboard} className='sidebar__icons' />
            <h3>Pedidos</h3>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/avaliacoes" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faStar} className='sidebar__icons' />
            <h3>Avaliações</h3>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faGauge} className='sidebar__icons' />
            <h3>Dashboard</h3>
          </NavLink>
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/relatorios" 
            className={({ isActive }) => (isActive ? "sidebar__text--link active" : "sidebar__text--link")}
          >
            <FontAwesomeIcon icon={faChartColumn} className='sidebar__icons' />
            <h3>Relatórios</h3>
          </NavLink>
        </div>
        <div className='sidebar-end'>
          <div>
            <FontAwesomeIcon icon={faCircleUser} className='sidebar__icons--account' />
            <h3 className='sidebar__text--account'>{nomeEstabelecimento}</h3>
            <button 
              className='sidebar-end__button' 
              onClick={logout} 
            >
              <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icons--logout' />
              <h4 className='sidebar__text--logout'>Sair</h4>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;

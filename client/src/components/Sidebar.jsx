import React from 'react';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUtensils, faClipboard, faStar, faGauge, faChartColumn, faCircleUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-top">
          <img src={logo} alt="Logo peça aí!" className='sidebar-top__logo' />
        </div>
        <div className="sidebar__item">
          <NavLink 
            to="/" 
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
        <div className='sidebar-end '>
          <div>
            <FontAwesomeIcon icon={faCircleUser} className='sidebar__icons--account' />
            <h3 className='sidebar__text--account'>Usuário</h3>
            <a href='/logout' className='sidebar-end__button'>
              <FontAwesomeIcon icon={faRightFromBracket} className='sidebar__icons--logout' />
              <h4 className='sidebar__text--logout'>Sair</h4>
            </a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;

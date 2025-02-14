import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUtensils, faClipboard, faStar, faGauge, faChartColumn } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <>
      <nav className="sidebar">
        <div className="sidebar-top">
          <img src={logo} alt="Logo peça aí!" className='sidebar-top__logo' />
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faHouse} className='sidebar__icons' />
            <h3>Início</h3>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faUtensils} className='sidebar__icons' />
            <h3>Meu cardápio</h3>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faClipboard} className='sidebar__icons' />
            <h3>Pedidos</h3>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faStar} className='sidebar__icons' />
            <h3>Avaliações</h3>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faGauge} className='sidebar__icons' />
            <h3>Dashboard</h3>
          </Link>
        </div>
        <div className="sidebar__item">
          <Link to="/" className="sidebar__text">
            <FontAwesomeIcon icon={faChartColumn} className='sidebar__icons' />
            <h3>Relatórios</h3>
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Sidebar;
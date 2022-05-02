import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/images/capres.jpg';
import { FaBars } from 'react-icons/fa';

const navLinks = [
  {
    name: 'Inicio',
    to: '/',
  },
  {
    name: 'Nosotros',
    to: '/nosotros',
  },
  {
    name: 'Socios',
    to: '/socios',
  },
  {
    name: 'Servicios',
    to: '/servicios',
  },
  {
    name: 'Contacto',
    to: '/contacto',
  },
  {
    name: 'Registrarse',
    to: '/sign-up',
  },
];
const HeaderNew = () => {
  return (
    <>
      <div className="nav-bar">
        <NavLink to="/">
          <img src={logo} alt="Logo Capres" className="h-16 w-auto " />
        </NavLink>
        <FaBars className="bars" />
        <div className="nav-menu">
          {navLinks.map((link) => (
            <NavLink to={link.to} key={link.name} className="nav-link">
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="nav-btn">
          <div className="nav-btn-link">
            <Link to="/sign-in">Log In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderNew;

import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/capres.jpg';
import { RiCloseLine, RiOpenArmLine } from 'react-icons/ri';

const Header = () => {
  const navItems = [
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
  ];

  return (
    <nav className="z-100 absolute top-0 left-0 w-full bg-transparent shadow-lg ">
      <div className="mx-auto max-w-full  px-6">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              {/* Website Logo goes here */}
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo Capres"
                  className="my-2 h-16 w-auto md:h-20"
                />
              </Link>
            </div>
            {/* Primary Navbar Items */}
            <div className="hidden items-center space-x-1 lg:flex">
              <ul className="flex w-full   flex-col md:w-auto  md:flex-row  md:items-center">
                {navItems.map((item) => (
                  <li
                    className="m-2 text-center text-lg  font-medium md:mr-6"
                    key={item.name}
                  >
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Secondary Navbar Items */}
          <div className="hidden items-center space-x-8 lg:flex">
            <Link
              to="/signin"
              className="rounded-full border-4 border-blue-500 py-2 px-8 text-xl font-medium  text-gray-500 transition duration-300 hover:shadow-md hover:shadow-blue-600/50"
            >
              Log in
            </Link>
            <Link
              to="/registro"
              className="rounded-full border-4 border-blue-600 bg-blue-600 py-2 px-6 text-xl font-medium text-white transition duration-300 hover:shadow-md hover:shadow-blue-600/40"
            >
              Registro
            </Link>
          </div>
          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden" onClick={''}>
            <button className="outline-none">
              <svg
                className=" h-8 w-8 text-gray-500 hover:text-blue-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden" id="mobile-menu">
        <ul>
          {navItems.map((item) => (
            <li
              className="m-2 text-center text-lg  font-medium md:mr-6"
              key={item.name}
            >
              <Link to={item.to}>{item.name}</Link>
            </li>
          ))}
        </ul>
        <div className="inline-flex max-w-full py-4">
          <Link
            to="/signin"
            className="mx-auto rounded-full border-4 border-blue-500 text-xl font-medium text-gray-500 transition duration-300  hover:shadow-md hover:shadow-blue-600/50 md:mx-0 md:py-2 md:px-8"
          >
            Log in
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

/* <ul className="flex flex-col   w-full md:w-auto  md:flex-row  md:items-center">
  {navItems.map((item) => (
    <li
      className="m-2 text-center md:mr-6  text-lg font-medium"
      key={item.name}
    >
      <Link to={item.to}>{item.name}</Link>
    </li>
  ))}
  <button className=" w-full md:m-0 md:ml-10 shadow-lg shadow-blue-500/50 bg-blue-600 text-gray-50 font-medium py-3 px-10 text-lg rounded-full">
    Registro
  </button>
</ul>; */

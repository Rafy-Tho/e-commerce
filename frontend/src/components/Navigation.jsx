import { useRef, useState } from 'react';
import logo from '../assets/logo.jpg'; // Update this path
import { Link, NavLink } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import { useSelector } from 'react-redux';
import useClickOutSideClose from '../hooks/useClickOutSideClose';

const Navigation = () => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const userMenuRef = useRef(null);
  useClickOutSideClose(userMenuRef, isUserMenuOpen, setIsUserMenuOpen);
  return (
    <nav className="bg-white fixed w-full z-20 top-0  border-b border-gray-200 mx-auto lg:max-w-6xl md:max-w-4xl">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-7" alt="Flowbite Logo" />
          <span className="self-center text-xl text-gray-900 font-semibold whitespace-nowrap">
            Drink Up
          </span>
        </Link>

        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse gap-5">
          <CartIcon />
          <div className="relative">
            <button
              type="button"
              className="flex text-sm bg-white rounded-full md:me-0 focus:ring-4 focus:ring-gray-300"
              id="user-menu-button"
              aria-expanded={isUserMenuOpen}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <span className="sr-only">Open user menu</span>
              {user?.image ? (
                <img
                  className="w-8 h-8 rounded-full"
                  src={user?.image}
                  alt="user photo"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user?.email?.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </button>

            {/* Dropdown menu */}
            {isUserMenuOpen && (
              <div
                ref={userMenuRef}
                className="absolute right-0 z-50 bg-white border border-gray-200 rounded-lg shadow-lg w-44 mt-2"
                id="user-dropdown"
              >
                <div className="px-4 py-3 text-sm border-b border-gray-200">
                  <span className="block text-gray-900 font-medium">
                    {user?.name || 'User'}
                  </span>
                  <span className="block text-gray-500 truncate">
                    {user?.email || 'user@example.com'}
                  </span>
                </div>
                <ul
                  className="p-2 text-sm text-gray-700 font-medium"
                  aria-labelledby="user-menu-button"
                >
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300"
            aria-controls="navbar-user"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M5 7h14M5 12h14M5 17h14"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isMobileMenuOpen ? 'block' : 'hidden'} items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
            <li>
              <NavLink
                to="/"
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                }
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                onClick={() => scrollTo(0, 0)}
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                }
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollTo(0, 0)}
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => scrollTo(0, 0)}
                to="/feature"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                }
              >
                Feature
              </NavLink>
            </li>

            <li>
              <NavLink
                onClick={() => scrollTo(0, 0)}
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0'
                    : 'block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0'
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

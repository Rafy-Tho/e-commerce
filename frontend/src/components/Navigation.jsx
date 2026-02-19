import { AiOutlineLogin, AiOutlineUserAdd } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../services/API/authApiSlice';
import { clearUserCredentials } from '../services/FEATURE/autSlice';
import '../styles/Navigation.css';
import AdminNav from './AdminNav';
import SidebarLink from './SidebarLink';

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout().unwrap();
      dispatch(clearUserCredentials());
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{ zIndex: 9999 }}
      className="flex xl:flex lg:flex md:hidden sm:hidden flex-col justify-between p-4 text-white bg-black w-[4%] hover:w-[15%] h-screen fixed"
      id="navigation-container"
    >
      {/* Sidebar Links */}
      <SidebarLink  />

      <div className="relative">
        {/* User Dropdown Button */}
        <button className="flex items-center text-gray-800 focus:outline-none"
        >
          {user && <span className="text-white">{user.name}</span>}
          {user && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 ml-1 transform rotate-180`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        { user && (
          <ul
            className={`absolute right-0 mt-2 mr-14 space-y-2 bg-white text-gray-600 ${
              !user.isAdmin ? '-top-20' : '-top-80'
            }`}
          >
            {user.isAdmin && <AdminNav />}

            <li>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                Profile
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                Logout
              </button>
            </li>
          </ul>
        )}
        {/* Login/Register Links */}
        {!user && (
          <ul>
            <li>
              <Link
                to="/login"
                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
              >
                <AiOutlineLogin className="mr-2 mt-1" size={26} />
                <span className="hidden nav-item-name">LOGIN</span>
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="flex items-center mt-5 transition-transform transform hover:translate-x-2"
              >
                <AiOutlineUserAdd size={26} />
                <span className="hidden nav-item-name">REGISTER</span>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navigation;
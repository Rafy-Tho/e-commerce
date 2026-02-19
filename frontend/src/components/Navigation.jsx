import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineLogin,
  AiOutlineUserAdd,
  AiOutlineShoppingCart,

} from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useLogoutMutation } from '../services/API/authApiSlice';
import { clearUserCredentials } from '../services/FEATURE/autSlice';
import '../styles/Navigation.css';
import { FaHeart } from "react-icons/fa";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logout] = useLogoutMutation();
  
const cartItems = []
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
    className="fixed top-0   bg-blue-400  py-3 flex justify-between items-center container mx-auto rounded-md px-6"
  >
    {/* LEFT SIDE - NAV LINKS */}
    <div className="flex items-center space-x-6">
      <Link to="/" className="flex items-center hover:text-pink-400">
        <AiOutlineHome size={22} />
        <span className="ml-2">Home</span>
      </Link>

      <Link to="/shop" className="flex items-center hover:text-pink-400">
        <AiOutlineShopping size={22} />
        <span className="ml-2">Shop</span>
      </Link>

      <Link to="/cart" className="relative flex items-center hover:text-pink-400">
        <AiOutlineShoppingCart size={22} />
        <span className="ml-2">Cart</span>

        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-3 px-2 text-xs bg-pink-500 rounded-full">
            {cartItems.reduce((a, c) => a + c.qty, 0)}
          </span>
        )}
      </Link>

      <Link to="/favorite" className="flex items-center hover:text-pink-400">
        <FaHeart size={18} />
        <span className="ml-2">Favorites</span>
        {/* <FavoritesCount /> */}
      </Link>
    </div>

    {/* RIGHT SIDE - USER */}
    <div className="relative">
      {user ? (
        <button
          className="flex items-center hover:text-pink-400"
        >
          {user.username}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-4 w-4 ml-1 
              rotate-180
            `}
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
        </button>
      ) : (
        <div className="flex items-center space-x-4">
          <Link to="/login" className="flex items-center hover:text-pink-400">
            <AiOutlineLogin size={22} />
            <span className="ml-1">Login</span>
          </Link>

          <Link
            to="/register"
            className="flex items-center hover:text-pink-400"
          >
            <AiOutlineUserAdd size={22} />
            <span className="ml-1">Register</span>
          </Link>
        </div>
      )}

      {/* DROPDOWN */}
      {user && (
        <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
          <li>
            <Link
              to="/profile"
              className="block px-4 py-2 hover:bg-gray-200"
            >
              Profile
            </Link>
          </li>

          {user.isAdmin && (
            <>
              <li>
                <Link
                  to="/admin/dashboard"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/productlist"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Products
                </Link>
              </li>
            </>
          )}

          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </div>
  </div>
);
  
}

export default Navigation;
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function SidebarLink({ cartItems = [] }) {
  return (
    <div className="flex flex-col justify-center space-y-4">
      <Link
        to="/"
        className="flex items-center transition-transform transform hover:translate-x-2"
      >
        <AiOutlineHome className="mr-2 mt-12" size={26} />
        <span className="hidden nav-item-name mt-12">HOME</span>
      </Link>

      <Link
        to="/shop"
        className="flex items-center transition-transform transform hover:translate-x-2"
      >
        <AiOutlineShopping className="mr-2 mt-12" size={26} />
        <span className="hidden nav-item-name mt-12">SHOP</span>
      </Link>

      <Link to="/cart" className="flex relative">
        <div className="flex items-center transition-transform transform hover:translate-x-2">
          <AiOutlineShoppingCart className="mt-12 mr-2" size={26} />
          <span className="hidden nav-item-name mt-12">Cart</span>
        </div>

        <div className="absolute top-9">
          {cartItems.length > 0 && (
            <span>
              <span className="px-1 py-0 text-sm text-white bg-pink-500 rounded-full">
                {cartItems.reduce((a, c) => a + c.qty, 0)}
              </span>
            </span>
          )}
        </div>
      </Link>

      <Link to="/favorite" className="flex relative">
        <div className="flex justify-center items-center transition-transform transform hover:translate-x-2">
          <FaHeart className="mt-12 mr-2" size={20} />
          <span className="hidden nav-item-name mt-12">Favorites</span>
          {/* <FavoritesCount /> */}
        </div>
      </Link>
    </div>
  );
}

export default SidebarLink;

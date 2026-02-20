import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const itemCount = cartItems.reduce((total, item) => total + item.OrderQty, 0);

  return (
    <div className="font-sans block  lg:inline-block lg:mt-0 lg:ml-6 align-middle">
      <NavLink
        onClick={() => scrollTo(0, 0)}
        to="/cart"
        className="relative flex items-center justify-center group"
        aria-label={`Shopping cart with ${itemCount} items`}
      >
        {/* Cart Icon */}
        <svg
          className={`w-8 h-8 transition-all duration-300 
              fill-gray-700 dark:fill-gray-300
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
        </svg>

        {/* Item Count Badge */}
        {itemCount > 0 && (
          <span
            className={`
            absolute -right-1 -top-1 
            flex items-center justify-center
            min-w-[1.25rem] h-5 
            px-1 
            rounded-full 
            text-xs font-bold 
            transition-all duration-300
            bg-gradient-to-r from-amber-600 to-orange-600 scale-110
            text-white 
            shadow-lg
            animate-bounce-subtle
          `}
          >
            {itemCount || 0}
          </span>
        )}
      </NavLink>
    </div>
  );
};

export default CartIcon;

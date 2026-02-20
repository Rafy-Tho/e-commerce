import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../services/FEATURE/cartSlice';

const Product = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const isInCart = cartItems?.find((item) => item._id === product._id);
  const dispatch = useDispatch();
  return (
    <div
      key={product.id}
      className="bg-white flex flex-col rounded-sm overflow-hidden shadow-md hover:scale-[1.01] transition-all relative group"
    >
      <a href="javascript:void(0)" className="block">
        <div className="w-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full aspect-[18/24] object-cover object-top"
          />
        </div>
        <div className="p-4">
          <h5 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2">
            {product.name}
          </h5>
          <div className="mt-2 flex items-center flex-wrap gap-2">
            <h6 className="text-sm sm:text-base font-semibold text-slate-900">
              ${product.price}
            </h6>
            <div
              className="bg-slate-100 w-8 h-8 flex items-center justify-center rounded-full cursor-pointer ml-auto hover:bg-slate-200 transition-colors"
              title="Wishlist"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                className="fill-slate-800 inline-block"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>

      {/* Quantity controls */}
      <div className="min-h-[50px] p-4 !pt-0">
        <div className="absolute left-0 right-0 bottom-3 max-w-[88%] mx-auto">
          {product.quantity > 0 && !isInCart && (
            <button
              onClick={() => dispatch(addToCart(product))}
              className="w-full text-sm px-2 py-2 font-medium bg-blue-500 hover:bg-blue-600 text-white tracking-wide outline-none border-none rounded-sm transition-colors"
            >
              Add to cart
            </button>
          )}
          {isInCart && (
            <button
              onClick={() => dispatch(removeFromCart(product._id))}
              className="w-full text-sm px-2 py-2 font-medium bg-red-400 hover:bg-red-500 text-white tracking-wide outline-none border-none rounded-sm transition-colors"
            >
              Remove from cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;

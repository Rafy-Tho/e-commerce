import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../services/FEATURE/cartSlice';

const DetailSection = ({ product }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const items = cartItems.find((item) => item._id === product._id);

  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="lg:max-w-6xl max-w-xl mx-auto">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          {/* Left Column - Images */}
          <div className="w-full lg:sticky top-4">
            <div className="flex flex-col gap-4">
              {/* Main Image */}
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full  object-cover object-top rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="w-full">
            <div>
              {/* Brand */}
              <span className="text-sm text-amber-600 dark:text-amber-400 font-semibold uppercase tracking-wide">
                {product.brand}
              </span>

              {/* Product Name */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mt-2">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="flex items-center gap-3 mt-3">
                <div className="flex items-center gap-1">
                  <span className="text-base font-semibold text-gray-900 dark:text-white">
                    {product.rating}
                  </span>
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? 'fill-amber-500'
                          : i < product.rating
                            ? 'fill-amber-300'
                            : 'fill-gray-300 dark:fill-gray-600'
                      }`}
                      viewBox="0 0 14 13"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-400 dark:text-gray-500">|</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {product.numReviews} Ratings
                </span>
                <span className="text-gray-400 dark:text-gray-500">|</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {product.numReviews} Reviews
                </span>
              </div>

              {/* Description */}
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price */}
              <div className="flex items-center flex-wrap gap-3 mt-6">
                <h4 className="text-amber-600 dark:text-amber-400 text-3xl sm:text-4xl font-bold">
                  ${product.price}
                </h4>
              </div>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            {/* Quantity and Actions */}
            <div>
              {/* Quantity Selector */}
              {items && (
                <div className="flex gap-4 items-center border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2.5 w-max rounded-lg">
                  <button
                    onClick={() => dispatch(decrementQuantity(product._id))}
                    className="border-0 outline-0 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-600 dark:fill-gray-400"
                      viewBox="0 0 121.805 121.804"
                    >
                      <path d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z" />
                    </svg>
                  </button>
                  <span className="text-gray-900 dark:text-white text-sm font-semibold px-6 block">
                    {items.OrderQty}
                  </span>
                  <button
                    onClick={() => dispatch(incrementQuantity(product._id))}
                    className="border-0 outline-0 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-gray-600 dark:fill-gray-400"
                      viewBox="0 0 512 512"
                    >
                      <path d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z" />
                      <path d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-4 flex flex-wrap gap-4">
                {!items && (
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="px-6 py-3 flex-1 min-w-[140px] cursor-pointer border-2 border-amber-600 dark:border-amber-500 bg-transparent hover:bg-amber-50 dark:hover:bg-amber-900/20 text-amber-600 dark:text-amber-400 text-sm font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  >
                    Add to Cart
                  </button>
                )}
                {items && (
                  <button
                    onClick={() => dispatch(removeFromCart(product._id))}
                    className="px-6 py-3 flex-1 min-w-[140px] cursor-pointer bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Remove from Cart
                  </button>
                )}
              </div>
            </div>

            <hr className="my-6 border-gray-200 dark:border-gray-700" />

            {/* Delivery Location */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                Check Delivery
              </h3>
            </div>

            {/* Service Features */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-amber-600 dark:fill-amber-400 inline"
                  viewBox="0 0 64 64"
                >
                  <path d="M59.89 13.36 49.73 7.495a4.21 4.21 0 0 0-4.2 0l-10.163 5.867A4.213 4.213 0 0 0 33.267 17v11.733a4.213 4.213 0 0 0 2.1 3.637L45.53 38.24a4.217 4.217 0 0 0 4.2 0l10.161-5.867a4.213 4.213 0 0 0 2.1-3.637V17a4.212 4.212 0 0 0-2.1-3.64z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium mt-2">
                  Express Delivery
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Within 2-3 days
                </p>
              </div>

              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-amber-600 dark:fill-amber-400 inline"
                  viewBox="0 0 100 100"
                >
                  <path d="M98 50c0 26.467-21.533 48-48 48S2 76.467 2 50c0-1.658 1.342-3 3-3s3 1.342 3 3c0 23.159 18.841 42 42 42s42-18.841 42-42S73.159 8 50 8c-11.163 0-21.526 4.339-29.322 12H32c1.658 0 3 1.342 3 3s-1.342 3-3 3H14c-1.658 0-3-1.342-3-3V5c0-1.658 1.342-3 3-3s3 1.342 3 3v10.234C25.851 6.786 37.481 2 50 2c26.467 0 48 21.533 48 48z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium mt-2">
                  30-Day Returns
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  Easy & hassle-free
                </p>
              </div>

              <div className="text-center p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 fill-amber-600 dark:fill-amber-400 inline"
                  viewBox="0 0 32 32"
                >
                  <path d="m31.385 15.434-3.33-5.55a1.11 1.11 0 0 0-.955-.544h-6.66V8.23a1.11 1.11 0 0 0-1.11-1.11h-2.22a1.11 1.11 0 0 0 0 2.22h1.11v13.32h-7.837a3.863 3.863 0 0 0-5.416 0H2.68v-5.55a1.11 1.11 0 0 0-2.22 0v6.66a1.11 1.11 0 0 0 1.11 1.11h2.276a4.44 4.44 0 0 0 0 .555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.056-.555h8.991a4.44 4.44 0 0 0-.056.555 3.885 3.885 0 0 0 7.77 0 4.44 4.44 0 0 0-.055-.555h2.22a1.11 1.11 0 0 0 1.11-1.11V16a1.11 1.11 0 0 0-.155-.566z" />
                </svg>
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm font-medium mt-2">
                  Free Shipping
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-xs">
                  On orders $50+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;

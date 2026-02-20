import { useEffect, useRef, useState } from 'react';
import { ratings } from '../constants/ratings';
import { useGetBrandNamesQuery } from '../services/API/productApiSlice';
import Loader from './Loader';
import Message from './Message';

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10);
  const {
    data: { brands = [] } = {},
    isFetching,
    error,
  } = useGetBrandNamesQuery();
  const [selectedBrands, setSelectedBrands] = useState('');
  const [selectedRating, setSelectedRating] = useState('');
  const [brandSearch, setBrandSearch] = useState('');

  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };
  const filteredBrands =
    brands?.length > 0
      ? brands.filter((brand) =>
          brand.toLowerCase().includes(brandSearch.toLowerCase()),
        )
      : [];
  const handleClearAll = () => {
    setSelectedBrands('');
    setMinPrice(0);
    setMaxPrice(10);
    setBrandSearch('');
  };

  const handleApplyFilters = () => {
    console.log('Applied filters:', {
      brands: selectedBrands,
      priceRange: { min: minPrice, max: maxPrice },
    });
    closeDrawer();
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target) &&
        isOpen
      ) {
        closeDrawer();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <div>
      {/* Drawer Wrapper */}
      <div
        className={`fixed inset-0 z-[1000] transition-opacity duration-300 ease-in-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          ref={backdropRef}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeDrawer}
        />

        {/* Drawer */}
        <div
          ref={drawerRef}
          className={`absolute right-0 top-0 h-full w-full max-w-[350px] bg-white dark:bg-gray-900 shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="overflow-auto h-[calc(100vh-116px)]">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 pt-6">
              {/* Header */}
              <div className="flex items-center pb-4 px-6">
                <h3 className="text-gray-900 dark:text-white text-lg font-semibold">
                  Filter Drinks
                </h3>
                <button
                  type="button"
                  onClick={handleClearAll}
                  className="text-sm to-blue-400 font-semibold ml-auto cursor-pointer hover:underline"
                >
                  Clear all
                </button>
              </div>

              {/* Categories Section */}
              <div className="p-6">
                <h6 className="text-gray-900 dark:text-white text-sm font-semibold">
                  Rating
                </h6>
                <ul className="mt-4 space-y-3">
                  {ratings.map((rating) => (
                    <li key={rating.id} className="flex items-center gap-3">
                      <input
                        type="radio"
                        id={rating.id}
                        name="rating"
                        value={rating.value}
                        checked={selectedRating === rating.id}
                        onChange={() => setSelectedRating(rating.id)}
                        className="w-4 h-4 cursor-pointer text-amber-600 focus:ring-amber-500"
                      />
                      <label
                        htmlFor={rating.id}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300 font-medium text-sm cursor-pointer"
                      >
                        <span className="text-sm">{rating.icon}</span>
                        <span>{rating.name}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
              {isFetching && <Loader />}
              {error && (
                <Message>
                  {error?.data?.message || 'Something went wrong'}
                </Message>
              )}
              {/* Brands Section */}
              {!isFetching && !error && (
                <div className="p-6">
                  <h6 className="text-gray-900 dark:text-white text-sm font-semibold">
                    Brands
                  </h6>
                  <div className="flex px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 overflow-hidden mt-2">
                    <input
                      type="text"
                      value={brandSearch}
                      onChange={(e) => setBrandSearch(e.target.value)}
                      placeholder="Search brand"
                      className="w-full bg-transparent outline-none text-gray-900 dark:text-white text-sm"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192.904 192.904"
                      className="w-3 fill-gray-500 dark:fill-gray-400"
                    >
                      <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z" />
                    </svg>
                  </div>
                  <ul className="mt-6 space-y-3 max-h-48 overflow-y-auto">
                    {filteredBrands.map((brand) => (
                      <li key={brand} className="flex items-center gap-3">
                        <input
                          id={brand}
                          type="checkbox"
                          checked={selectedBrands === brand}
                          onChange={() => setSelectedBrands(brand)}
                          className="w-4 h-4 cursor-pointer text-amber-600 focus:ring-amber-500 rounded"
                        />
                        <label
                          htmlFor={brand}
                          className="text-gray-600 dark:text-gray-300 font-medium text-sm cursor-pointer"
                        >
                          {brand}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Price Section */}
              <div className="p-6">
                <h6 className="text-gray-900 dark:text-white text-sm font-semibold">
                  Price Range
                </h6>
                <div className="relative mt-4">
                  <div className="h-1.5 bg-gray-300 dark:bg-gray-600 relative rounded-md">
                    <div
                      className="absolute h-1.5 bg-amber-500 rounded-full"
                      style={{
                        width: `${((maxPrice - minPrice) / 10) * 100}%`,
                        left: `${minPrice}%`,
                      }}
                    />
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(
                        Math.min(parseInt(e.target.value), maxPrice - 1),
                      )
                    }
                    className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                      filter-range"
                  />
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(
                        Math.max(parseInt(e.target.value), minPrice + 1),
                      )
                    }
                    className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer filter-range"
                  />
                  <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium text-sm mt-4">
                    <span>${minPrice}</span>
                    <span>${maxPrice}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Buttons */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4 space-y-3 px-6">
            <button
              type="button"
              onClick={handleApplyFilters}
              className="px-4 py-2.5 rounded-md text-white text-sm w-full font-medium bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 transition-colors"
            >
              Apply Filters
            </button>
            <button
              type="button"
              onClick={closeDrawer}
              className="px-4 py-2.5 rounded-md text-gray-900 dark:text-white text-sm w-full font-medium bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      {/* Open Drawer Button */}
      <button
        type="button"
        onClick={openDrawer}
        className="mt-4  block px-6 py-3 rounded-lg  text-sm font-medium  shadow-lg hover:shadow-xl transition-all duration-300 transform bg-blue-500 text-blue-50 cursor-pointer text-left"
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          Filter Drinks
        </span>
      </button>
    </div>
  );
};

export default Filter;

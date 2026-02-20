import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useClickOutSideClose from '../../hooks/useClickOutSideClose';
import BrandFilter from './BrandFilter';
import PriceFilter from './PriceFilter';
import RatingFilter from './RatingFilter';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpen, setIsOpen] = useState(false);

  const [selectedBrands, setSelectedBrands] = useState(
    searchParams.get('brand') || '',
  );
  const [selectedRating, setSelectedRating] = useState({
    min: Number(searchParams.get('rating[gte]')) || 0,
    max: Number(searchParams.get('rating[lte]')) || 0,
  });
  const drawerRef = useRef(null);
  const backdropRef = useRef(null);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  const handleClearAll = () => {
    setSelectedRating('');
    setSelectedBrands('');

    searchParams.delete('brand');
    searchParams.delete('rating[gte]');
    searchParams.delete('rating[lte]');
    setSearchParams(searchParams);
  };

  // Handle click outside to close
  useClickOutSideClose(drawerRef, isOpen, closeDrawer);

  return (
    <div>
      {/* Drawer Wrapper */}
      <div
        className={`fixed inset-0 z-[1000] transition-opacity duration-300 ease-in-out ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        Backdrop
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
          <div className="overflow-auto h-[calc(100vh-16px)]">
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
              {/* Rating Section */}
              <RatingFilter
                selectedRating={selectedRating}
                setSelectedRating={setSelectedRating}
              />
              {/* Brands Section */}
              <BrandFilter
                selectedBrands={selectedBrands}
                setSelectedBrands={setSelectedBrands}
              />
              {/* Price Section */}
              <PriceFilter />
            </div>
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

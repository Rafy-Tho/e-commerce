import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function PriceFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [minPrice, setMinPrice] = useState(
    Number(searchParams.get('price[gte]')) || 1,
  );
  const [maxPrice, setMaxPrice] = useState(
    Number(searchParams.get('price[lte]')) || 10,
  );
  const handlePrice = () => {
    searchParams.set('price[gte]', minPrice);
    searchParams.set('price[lte]', maxPrice);
    if (searchParams.get('page')) {
      searchParams.delete('page');
    }
    setSearchParams(searchParams);
  };
  const handleReset = () => {
    setMinPrice(1);
    setMaxPrice(10);
    searchParams.delete('price[gte]');
    searchParams.delete('price[lte]');
    setSearchParams(searchParams);
  };
  console.log({ minPrice, maxPrice });
  return (
    <>
      <div className="p-6">
        <h6 className="text-gray-900 dark:text-white text-sm font-semibold">
          Price Range
        </h6>
        <div className="relative mt-4">
          <div className="h-1.5 bg-gray-300 dark:bg-gray-600 relative rounded-md">
            <div
              className="absolute h-1.5 bg-amber-500 rounded-full"
              style={{
                width: `${((maxPrice - minPrice) / 9) * 100}%`,
                left: `${((minPrice - 1) / 10) * 100}%`,
              }}
            />
          </div>
          <input
            type="range"
            min="1"
            max="10"
            value={minPrice}
            onChange={(e) =>
              setMinPrice(Math.min(parseInt(e.target.value), maxPrice - 1))
            }
            className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer 
                      filter-range"
          />
          <input
            type="range"
            min="1"
            max="10"
            value={maxPrice}
            onChange={(e) =>
              setMaxPrice(Math.max(parseInt(e.target.value), minPrice + 1))
            }
            className="absolute top-0 w-full h-1.5 bg-transparent appearance-none cursor-pointer filter-range"
          />
          <div className="flex justify-between text-gray-600 dark:text-gray-300 font-medium text-sm mt-4">
            <span>${minPrice}</span>
            <span>${maxPrice}</span>
          </div>
        </div>
      </div>
      {/* Footer Buttons */}
      <div className="border-t border-gray-200 dark:border-gray-700 pt-4   px-6 flex items-center gap-3">
        {minPrice !== 1 ||
          (maxPrice !== 10 && (
            <button
              onClick={handlePrice}
              type="button"
              className="px-4 py-2.5 rounded-md text-white text-sm w-full font-medium   bg-blue-500 transition-colors cursor-pointer"
            >
              Apply Price
            </button>
          ))}
        {minPrice !== 1 ||
          (maxPrice !== 10 && (
            <button
              onClick={handleReset}
              type="button"
              className="px-4 py-2.5 rounded-md text-white text-sm w-full font-medium  transition-colors bg-slate-400 cursor-pointer"
            >
              Reset Price
            </button>
          ))}
      </div>
    </>
  );
}

export default PriceFilter;

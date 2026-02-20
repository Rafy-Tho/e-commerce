import { useState } from 'react';
import { useGetCategoriesQuery } from '../services/API/categoryApiSlice';
import Loader from './Loader';
import Message from './Message';
import { useSearchParams } from 'react-router-dom';
const SearchBar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(
    searchParams.get('category') || 'All categories',
  );
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('search') || '',
  );

  const {
    data: { categories = [] } = {},
    isFetching,
    error,
  } = useGetCategoriesQuery();

  const handleCategorySelect = (category) => {
    const newCategory =
      category === selectedCategory ? 'All categories' : category;
    setSelectedCategory(newCategory);

    if (newCategory === 'All categories') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', newCategory);
    }
    setSearchParams(searchParams);
    setIsDropdownOpen(false);
  };

  const handleSearchQueryChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);

    if (!value.trim()) {
      searchParams.delete('search');
      setSearchParams(searchParams);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    searchParams.set('search', searchQuery);
    setSearchParams(searchParams);
  };
  if (isFetching) return <Loader />;
  if (error)
    return <Message>{error?.data?.message || 'Something went wrong'}</Message>;
  return (
    <form onSubmit={handleSearch} className="max-w-2xl mx-auto p-4">
      <div className="flex shadow-sm -space-x-px">
        {/* Category Dropdown Button */}
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="inline-flex items-center shrink-0 z-10 text-gray-700 bg-gray-100 border border-gray-300 hover:bg-gray-200 hover:text-gray-900 focus:ring-4 focus:ring-gray-300 font-medium leading-5 rounded-l-lg text-sm px-4 py-2.5 focus:outline-none transition-colors relative"
        >
          <svg
            className="w-4 h-4 me-1.5"
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
            />
          </svg>
          {selectedCategory === 'All categories'
            ? 'All categories'
            : categories.find((category) => category._id === selectedCategory)
                ?.name}
          <svg
            className={`w-4 h-4 ms-1.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
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
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 9-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute z-20 mt-12 bg-white border border-gray-300 rounded-lg shadow-lg w-44">
            <ul className="p-2 text-sm text-gray-700 font-medium">
              {categories.map((category) => (
                <li key={category._id}>
                  <button
                    type="button"
                    onClick={() => handleCategorySelect(category._id)}
                    className={
                      category._id === selectedCategory
                        ? 'block w-full text-left p-2 text-gray-900 bg-gray-100 rounded-md transition-colors'
                        : 'block w-full text-left p-2 hover:bg-gray-100 hover:text-gray-900 rounded-md transition-colors'
                    }
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Search Input */}

        <input
          type="search"
          value={searchQuery}
          onChange={handleSearchQueryChange}
          className="px-3 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full placeholder:text-gray-500 outline-none"
          placeholder="Search for drinks name relative"
          required
        />

        {/* Search Button */}
        <button
          type="submit"
          className="inline-flex items-center text-white bg-blue-500 hover:bg-blue-600 border border-transparent focus:ring-4 focus:ring-blue-300 shadow-sm font-medium leading-5 rounded-r-lg text-sm px-4 py-2.5 focus:outline-none transition-colors cursor-pointer"
        >
          <svg
            className="w-4 h-4 me-1.5"
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
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            />
          </svg>
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

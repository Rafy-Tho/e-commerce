import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const Pagination = ({ pagination }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(
    Number(searchParams.get('page')) || 1,
  );
  const { totalPages } = pagination || {};
  const handlePageChange = (page) => {
    if (page < 1 || page > pagination?.totalPages) return;
    setCurrentPage(page);
    searchParams.set('page', String(page));
    setSearchParams(searchParams);
    scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 10; // Number of visible pages besides first, last, and ellipsis

    if (totalPages <= maxVisible + 2) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate start and end of visible pages around current page
      let start = Math.max(2, currentPage - 2);
      let end = Math.min(totalPages - 1, currentPage + 2);

      // Adjust if at the beginning
      if (currentPage <= 3) {
        end = Math.min(totalPages - 1, maxVisible);
      }

      // Adjust if at the end
      if (currentPage >= totalPages - 2) {
        start = Math.max(2, totalPages - maxVisible + 1);
      }

      // Add ellipsis before visible pages if needed
      if (start > 2) {
        pages.push('...');
      }

      // Add visible pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis after visible pages if needed
      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page
      if (totalPages > 1) {
        pages.push(totalPages);
      }
    }

    return pages;
  };
  if (totalPages <= 1) return null;
  return (
    <ul className="flex space-x-2 justify-center mt-8">
      {/* Previous Button */}
      <li>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md transition-colors ${
            currentPage === 1
              ? 'bg-gray-100 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 fill-gray-500 ${currentPage === 1 ? 'opacity-50' : ''}`}
            viewBox="0 0 55.753 55.753"
          >
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </button>
      </li>

      {/* Page Numbers */}
      {getPageNumbers().map((page, index) => (
        <li key={index}>
          {page === '...' ? (
            <span className="flex items-center justify-center shrink-0 text-base font-medium text-slate-900 dark:text-white px-3 h-9">
              ...
            </span>
          ) : (
            <button
              onClick={() => handlePageChange(page)}
              className={`flex items-center justify-center shrink-0 text-base font-medium px-3.5 h-9 rounded-md transition-colors ${
                currentPage === page
                  ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400'
                  : 'text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }`}
            >
              {page}
            </button>
          )}
        </li>
      ))}

      {/* Next Button */}
      <li>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md transition-colors ${
            currentPage === totalPages
              ? 'bg-gray-100 cursor-not-allowed'
              : 'bg-gray-200 hover:bg-gray-300 cursor-pointer'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`w-3 fill-gray-500 rotate-180 ${currentPage === totalPages ? 'opacity-50' : ''}`}
            viewBox="0 0 55.753 55.753"
          >
            <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Pagination;

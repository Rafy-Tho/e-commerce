import { useState } from 'react';
import GetStarRating from '../../utils/GetStarRating';
import Review from './Review';

const ReviewsSection = ({ product }) => {
  const [showReviews, setShowReviews] = useState(false);

  const reviewsToShow = showReviews
    ? product.reviews
    : product.reviews.slice(0, 3);

  const { reviews } = product;

  const averageRating = (
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
  ).toFixed(1);
  const totalReviews = reviews.length;

  return (
    <div className="py-8 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        {/* Header with stats */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Customer Reviews
            </h3>
            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {averageRating}
                </span>
                <div className="flex ml-1">
                  {GetStarRating(Math.round(averageRating))}
                </div>
              </div>
              <span className="text-gray-400 dark:text-gray-500">•</span>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Based on {totalReviews}{' '}
                {totalReviews === 1 ? 'review' : 'reviews'}
              </p>
            </div>
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Sort by:
            </span>
            <select
              // value={sortBy}
              // onChange={(e) => setSortBy(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="recent">Most Recent</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Reviews list */}
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {reviewsToShow?.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>

        {/* Load more button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowReviews(!showReviews)}
            className="px-6 py-3 border-2 border-amber-600 dark:border-amber-500 text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/20 font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {showReviews ? 'Show Less Reviews' : 'Load More Reviews'}
          </button>
        </div>

        {/* Write review prompt */}
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                Have you tried this drink?
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Share your experience with others
              </p>
            </div>
            <button className="px-6 py-2.5 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              Write a Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import GetStarRating from '../../utils/GetStarRating';
dayjs.extend(relativeTime);
function Review({ review }) {
  return (
    <div key={review.id} className="py-6">
      <div className="flex items-start max-md:flex-col gap-4 md:gap-8">
        {/* Reviewer info */}
        <div className="flex items-start gap-4 w-full max-w-56">
          <div className="shrink-0">
            <img
              src={review.user?.image}
              alt={review.user?.name}
              className="object-cover rounded-full w-12 h-12 border-2 border-amber-200 dark:border-amber-800"
            />
          </div>
          <div>
            <p className="text-[15px] text-gray-900 dark:text-white font-semibold">
              {review.user.name}
            </p>
          </div>
        </div>

        {/* Review content */}
        <div className="flex-1">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h6 className="text-gray-900 dark:text-white text-base font-semibold">
              {review.name}
            </h6>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              {dayjs(review.createdAt).fromNow()}
            </p>
          </div>

          <div className="flex items-center space-x-0.5 mt-2">
            {GetStarRating(review.rating)}
          </div>

          <div className="mt-3">
            <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
              "{review.comment}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;

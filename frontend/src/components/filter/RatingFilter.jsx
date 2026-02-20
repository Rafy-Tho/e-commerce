import { useSearchParams } from 'react-router-dom';
import { ratings } from '../../constants/ratings';

function RatingFilter({ selectedRating, setSelectedRating }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSelectRating = (rating) => {
    if (
      selectedRating.min === rating.min &&
      selectedRating.max === rating.max
    ) {
      setSelectedRating({ min: 0, max: 0 });
      searchParams.delete('rating[gte]');
      searchParams.delete('rating[lte]');
    } else {
      setSelectedRating({ min: rating.min, max: rating.max });
      searchParams.set('rating[gte]', rating.min);
      searchParams.set('rating[lte]', rating.max);
    }
    if (searchParams.get('page')) {
      searchParams.delete('page');
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="p-6">
      <h6 className="text-gray-900 dark:text-white text-sm font-semibold">
        Rating
      </h6>
      <ul className="mt-4 space-y-3">
        {ratings.map((rating) => (
          <li key={rating.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              id={rating.id}
              name="rating"
              value={rating.value}
              checked={
                selectedRating.min === rating.min &&
                selectedRating.max === rating.max
              }
              onChange={() =>
                handleSelectRating({ min: rating.min, max: rating.max })
              }
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
  );
}

export default RatingFilter;

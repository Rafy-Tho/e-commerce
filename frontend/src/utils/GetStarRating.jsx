const GetStarRating = (rating) => {
  return [...Array(5)].map((_, index) => (
    <svg
      key={index}
      xmlns="http://www.w3.org/2000/svg"
      className={`w-[18px] h-[18px] ${index < rating ? 'fill-amber-400' : 'fill-gray-300 dark:fill-gray-600'}`}
      viewBox="0 0 24 24"
    >
      <path d="M12 17.42L6.25 21.54c-.29.2-.66-.09-.56-.43l2.14-6.74L2.08 10.15c-.26-.2-.13-.6.2-.62l7.07-.05L11.62 2.66c.1-.32.56-.32.66 0l2.24 6.82 7.07.05c.33.01.46.42.2.62l-5.75 4.22 2.14 6.74c.1.34-.27.63-.56.43L12 17.42z" />
    </svg>
  ));
};
export default GetStarRating;

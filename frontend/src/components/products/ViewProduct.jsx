import { useGetProductsBrandQuery } from '../../services/API/productApiSlice';
import Loader from '../Loader';
import Message from '../Message';

const ViewProduct = () => {
  const {
    data: { products } = {},
    isFetching,
    error,
  } = useGetProductsBrandQuery();

  if (isFetching) {
    return <Loader />;
  }

  if (error) {
    return <Message>{error?.data?.message || 'Something went wrong'}</Message>;
  }

  return (
    <div className="py-4 mx-auto lg:max-w-6xl md:max-w-4xl max-w-xl">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-10">
        Top Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 gap-4 z-10">
        {products?.map((product) => (
          <div
            key={product._id}
            className="bg-gray-100 p-3 rounded-lg group overflow-hidden cursor-pointer relative hover:before:bg-black before:absolute before:inset-0 before:opacity-20 before:transition-all"
          >
            <div className="w-full aspect-[41/50] overflow-hidden mx-auto">
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewProduct;

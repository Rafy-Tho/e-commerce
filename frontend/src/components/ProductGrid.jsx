import { useSearchParams } from 'react-router-dom';
import Product from './Product';
import { useGetProductsQuery } from '../services/API/productApiSlice';
import Loader from './Loader';
import Message from './Message';
import Pagination from './Pagination';
// Sample product data

const ProductGrid = () => {
  const [searchParams] = useSearchParams();
  const { data, isFetching, error } = useGetProductsQuery(
    Object.fromEntries(searchParams.entries() || {}),
  );

  const { products, pagination, results } = data || {};

  if (isFetching) return <Loader />;
  if (error)
    return <Message>{error?.data?.message || 'Something went wrong'}</Message>;
  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Pagination pagination={pagination} results={results} />
    </div>
  );
};

export default ProductGrid;

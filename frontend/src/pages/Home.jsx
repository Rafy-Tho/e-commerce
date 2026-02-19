import { Link, useParams } from 'react-router-dom';
import { useGetProductsQuery } from '../services/API/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';

function Home() {
  const { query } = useParams();
  const { data, isLoading, isError, error } = useGetProductsQuery({ query });
  console.log({ data, isLoading, isError, error });
  return (
    <>
      {/* {!query ? <Header /> : null} */}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">
          {error.message || 'Something went wrong'}
        </Message>
      ) : (
        <>
          <div className="flex justify-around items-center">
            <h1 className=" ">Special Products</h1>

            <Link
              to="/shop"
              className="bg-pink-600 font-bold rounded-full py-2 px-10 "
            >
              Shop
            </Link>
          </div>

          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {data.products.map((product) => (
                <div key={product._id}>
                  <Product product={product} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;

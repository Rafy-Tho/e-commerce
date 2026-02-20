import { useParams } from 'react-router-dom';
import DetailSection from '../components/products/DetailSection';
import ReviewsSection from '../components/products/ReviewSections';
import { useGetProductDetailQuery } from '../services/API/productApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

function ProductDetail() {
  const { id } = useParams();
  const {
    data: { product } = {},
    isFetching,
    error,
  } = useGetProductDetailQuery(id);
  if (isFetching) {
    return <Loader />;
  }
  if (error) {
    return <Message>{error?.data?.message || 'Something went wrong'}</Message>;
  }
  return (
    <div>
      <DetailSection product={product} />
      <ReviewsSection product={product} />
    </div>
  );
}

export default ProductDetail;

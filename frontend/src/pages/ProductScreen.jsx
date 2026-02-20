import Filter from '../components/Filter';
import ProductGrid from '../components/ProductGrid';
import SearchBar from '../components/SearchBar';

function ProductScreen() {
  return (
    <div>
      <SearchBar />
      <h2 className="text-2xl sm:text-3xl font-bold  mb-6 sm:mb-8 text-center">
        All Products
      </h2>
      <Filter />
      <ProductGrid />
    </div>
  );
}

export default ProductScreen;

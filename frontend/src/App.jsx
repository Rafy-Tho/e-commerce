import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Feature from './pages/Feature';
import Contact from './pages/Contact';
import ProductScreen from './pages/ProductScreen';
import ProductDetail from './pages/ProductDetail';
import ShoppingCart from './pages/ShoppingCart';
import OrderDetailPage from './pages/OrderDetailPage';
import Payment from './pages/Payment';
import LoginScreen from './pages/LoginScreen';
import SignUpScreen from './pages/SignUpScreen';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="feature" element={<Feature />} />
      <Route path="contact" element={<Contact />} />
      <Route path="products" element={<ProductScreen />} />
      <Route path="products/:id" element={<ProductDetail />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="order-details" element={<OrderDetailPage />} />
      <Route path="order-payment" element={<Payment />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="signup" element={<SignUpScreen />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

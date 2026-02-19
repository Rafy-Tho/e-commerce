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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="feature" element={<Feature />} />
      <Route path="contact" element={<Contact />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

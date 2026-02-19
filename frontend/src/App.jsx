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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

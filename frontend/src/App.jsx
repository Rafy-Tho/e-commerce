import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
} from 'react-router-dom';
import AppLayout from './components/AppLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout />}>
      {/* <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} /> */}
    </Route>,
  ),
);
function App() {
  return <RouterProvider router={router} />;
}
export default App;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
function AppLayout() {
  return (
    <div className="container mx-auto">
      <ToastContainer />
      <Navigation />
      <main className="py-3 mt-12">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navigation from './Navigation';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
function AppLayout() {
  return (
    <div className="mx-auto lg:max-w-6xl md:max-w-4xl min-w-sm">
      <ToastContainer />
      <Navigation />
      <main className="py-3 mt-16 sm:mt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;

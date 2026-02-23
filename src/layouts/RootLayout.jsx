import { Outlet } from 'react-router-dom';


import Navbar from '../components/layout/navbar/Navbar';
import Footer from '../components/layout/footer/Footer';
import ScrollToTop from '../utils/ScrollToTop';

const MainLayout = () => {
    return (
        <div className="flex flex-col  min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
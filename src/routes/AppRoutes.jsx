import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import ProductDetailsPage from '../pages/ProductDetails';
import CartPage from '../pages/CartPage';
// import ProductDetails from '../pages/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true, 
        element: <Home />,
      },
      {
        path: '/product/:id/:slug?',
        element: <ProductDetailsPage/>,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
    ],
  },
]);
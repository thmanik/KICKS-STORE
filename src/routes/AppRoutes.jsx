import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import ProductDetailsPage from '../pages/ProductDetails';
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
        path: 'product',
        element: <ProductDetailsPage/>,
      },
    ],
  },
]);
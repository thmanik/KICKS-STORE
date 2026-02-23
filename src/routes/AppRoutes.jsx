import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import ProductDetailsPage from '../pages/ProductDetails';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import ReviewsPage from '../pages/ReviewsPage';
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
      {
        path:'/category/:categoryName',
        element: <CategoryPage />,
      },
      {
        path:'/reviews',
        element: <ReviewsPage />,
      },
    ],
  },
]);
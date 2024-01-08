import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Error404, LandingPage } from './components/components-routes';

import { lazy } from 'react';
import CartPage from './pages/CartPage/CartPage';

const ProductsPage = lazy(() => import('./pages/ProductsPage/ProductsPage'));

const ProductInfoPage = lazy(
  () => import('./pages/ProductInfoPage/ProductInfoPage')
);

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/search' element={<ProductsPage />} />
      <Route path='/search/:queryParam' element={<ProductsPage />} />
      <Route path='/producto/:product' element={<ProductInfoPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/*' element={<Error404 />} />
    </Routes>
  );
}

export default App;

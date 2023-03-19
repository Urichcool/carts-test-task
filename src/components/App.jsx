import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const routes = {
  HomePage: lazy(() => import('../pages/HomePage')),
  CartsPage: lazy(() => import('../pages/CartsPage')),
  CartIdPage: lazy(() => import('../pages/CartIdPage')),
};

const { HomePage, CartsPage, CartIdPage } = routes;

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carts" element={<CartsPage />} />
          <Route path="/carts/:cartId" element={<CartIdPage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

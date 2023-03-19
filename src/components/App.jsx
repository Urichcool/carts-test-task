import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

const routes = {
  HomePage: lazy(() => import('../pages/HomePage')),
  CartsPage: lazy(() => import('../pages/CartsPage')),
};

const { HomePage, CartsPage } = routes;

export const App = () => {
  return (
    <>
      <Helmet>
        <title>Carts-App</title>
      </Helmet>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carts" element={<CartsPage />} />
        </Route>
        <Route path="*" element={<Layout />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

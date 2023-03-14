import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'pages/HomePage';
import { CartsPage } from 'pages/CartsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/carts" element={<CartsPage />}></Route>
        </Route>
      </Routes>
    </>
  );
};

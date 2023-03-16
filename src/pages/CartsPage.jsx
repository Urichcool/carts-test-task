import { CartsList } from 'components/Carts/CartsList';
import { getIsLoading, getCarts } from 'redux/carts/cartsSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchCarts } from 'redux/carts/operations';
import { AppContainerStyled } from 'components/App.styled';
import { Helmet } from 'react-helmet';
import { Loader } from 'components/Loader';
import { UserAddCart } from 'components/Carts/UserAddCart';

export const CartsPage = () => {
  const isLoading = useSelector(getIsLoading);
  const carts = useSelector(getCarts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarts());
  }, [dispatch]);

  return (
    <AppContainerStyled>
      <Helmet>
        <title>Carts</title>
      </Helmet>
      {isLoading && <Loader />}
      {carts.length !== 0 && !isLoading && (
        <>
          <UserAddCart />
          <CartsList />
        </>
      )}
    </AppContainerStyled>
  );
};

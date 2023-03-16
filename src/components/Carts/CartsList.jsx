import { CartsListStyled } from './CartsList.styled';
import { useSelector } from 'react-redux';
import { getCarts } from 'redux/carts/cartsSlice';
import { CartsListItem } from './CartsListItem';

export const CartsList = () => {
  const carts = useSelector(getCarts);

  return (
    <CartsListStyled>
      {carts.map(({ id, total, discountedTotal, userId }) => (
        <CartsListItem
          key={id}
          total={total}
          discountedTotal={discountedTotal}
          userId={userId}
          id={id}
        />
      ))}
    </CartsListStyled>
  );
};

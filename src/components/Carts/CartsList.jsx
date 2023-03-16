import { CartsListStyled } from './CartsList.styled';
import { useSelector } from 'react-redux';
import { getCarts } from 'redux/carts/cartsSlice';
import { CartsListItem } from './CartsListItem';


export const CartsList = () => {
  const carts = useSelector(getCarts);

  return (
    <CartsListStyled>
      {carts.map(cart => {
       return (
         <CartsListItem
           key={carts.indexOf(cart) + 1}
           total={cart.total}
           discountedTotal={cart.discountedTotal}
           userId={cart.userId}
           id={cart.id}
         />
       );
      })}
    </CartsListStyled>
  );
};

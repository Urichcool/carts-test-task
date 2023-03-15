import {
  CartsListItemStyled,
  CartsListItemTextStyled,
  CartsDeleteButtonStyled,
} from './CartsList.styled';
import { BsFillBasket2Fill } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from 'redux/operations';
import { getIsLoading } from 'redux/cartsSlice';
import PropTypes from 'prop-types';

export const CartsListItem = ({ total, discountedTotal, userId, id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  return (
    <CartsListItemStyled>
      <CartsDeleteButtonStyled
        onClick={() => dispatch(deleteCart(id))}
        disabled={isLoading}
      >
        <AiOutlineClose />
      </CartsDeleteButtonStyled>
      <BsFillBasket2Fill />
      <CartsListItemTextStyled>Cart №{id}</CartsListItemTextStyled>
      <CartsListItemTextStyled>User number: {userId}</CartsListItemTextStyled>
      <CartsListItemTextStyled>Total: {total}</CartsListItemTextStyled>
      <CartsListItemTextStyled>
        Discounted Total: {discountedTotal}
      </CartsListItemTextStyled>
    </CartsListItemStyled>
  );
};

CartsListItem.propTypes = {
  total: PropTypes.number.isRequired,
  discountedTotal: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

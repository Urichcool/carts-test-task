import { CartsListItemStyled, CartsListItemTextStyled } from './CartsList.styled';
import { BsFillBasket2Fill } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const CartsListItem = ({ total, discountedTotal, userId, id }) => {
    return (
      <CartsListItemStyled>
        <BsFillBasket2Fill />
            <CartsListItemTextStyled>Cart №{id}</CartsListItemTextStyled>
            <CartsListItemTextStyled>User number: {userId}</CartsListItemTextStyled>
            <CartsListItemTextStyled>Total: {total}</CartsListItemTextStyled>
            <CartsListItemTextStyled>Discounted Total: {discountedTotal}</CartsListItemTextStyled>
      </CartsListItemStyled>
    );
};

CartsListItem.propTypes = {
  total: PropTypes.number.isRequired,
  discountedTotal: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired
}
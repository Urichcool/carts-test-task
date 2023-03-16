import {
  ProductsListItemStyled,
  ProductsListTextStyled,
  ProductDeleteButtonStyled,
} from './Products.styled';
import { AiOutlineClose } from 'react-icons/ai';
import { deleteProduct } from 'redux/products/productsSlice';
import { useDispatch } from 'react-redux';

export const ProductsItem = ({ title, quantity, id }) => {
  const dispatch = useDispatch();

  return (
    <ProductsListItemStyled>
      <ProductDeleteButtonStyled
        onClick={() => {
          dispatch(deleteProduct(id));
        }}
      >
        <AiOutlineClose />
      </ProductDeleteButtonStyled>
      <ProductsListTextStyled>{title} </ProductsListTextStyled>
      <ProductsListTextStyled>Quantity: {quantity}</ProductsListTextStyled>
    </ProductsListItemStyled>
  );
};

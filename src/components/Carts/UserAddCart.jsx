import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from 'redux/products/operations';
import {
  ProductAddFormStyled,
  ProductAddLabelStyled,
  ProductAddInputStyled,
  ProductAddFormTextSyled,
  ProductAddButtonStyled,
} from './CartsList.styled';
import { getProducts } from 'redux/products/productsSlice';

export const UserAddCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const handleProductSubmit = e => {
    e.preventDefault();
    const id = e.currentTarget.elements[0].value;
    dispatch(fetchProductById(id));
  };

  return (
    <>
      <ProductAddFormTextSyled>Add new cart</ProductAddFormTextSyled>
      <ProductAddFormStyled onSubmit={handleProductSubmit}>
        <ProductAddLabelStyled>
          Product Id:
          <ProductAddInputStyled></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddLabelStyled>
          Quantity:
          <ProductAddInputStyled></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddButtonStyled>Add product</ProductAddButtonStyled>
      </ProductAddFormStyled>
    </>
  );
};

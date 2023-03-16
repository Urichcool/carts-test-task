import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from 'redux/products/operations';
import {
  ProductAddFormStyled,
  ProductAddLabelStyled,
  ProductAddInputStyled,
  ProductAddFormTextStyled,
  ProductAddButtonStyled,
  ProductsListStyled,
  ProductsListEmptyTextStyled
} from '../Products/Products.styled';
import { getProducts } from 'redux/products/productsSlice';
import { ProductsItem } from './ProductsItem';

export const UserAddCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  console.log(products);

  const handleProductSubmit = e => {
    e.preventDefault();
    const id = e.currentTarget.elements[0].value;
    const quantity = e.currentTarget.elements[1].value;
    if (id === '' || quantity === '') {
      return;
    }
    if (products.some(product => product.id === Number(id))) {
      e.currentTarget.reset();
      return
    }
    dispatch(fetchProductById({ id, quantity }));
    e.currentTarget.reset();
  };

  return (
    <>
      <ProductAddFormTextStyled>Add new cart</ProductAddFormTextStyled>
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
      {products.length !== 0 ? (
        <ProductsListStyled>
          {products.map(({ title, quantity, id }) => (
            <ProductsItem key={id} title={title} quantity={quantity} />
          ))}
        </ProductsListStyled>
      ) : (
        <ProductsListEmptyTextStyled>Your cart is currently empty</ProductsListEmptyTextStyled>
      )}
    </>
  );
};

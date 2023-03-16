import { useDispatch, useSelector } from 'react-redux';
import { fetchProductById } from 'redux/products/operations';
import {
  ProductAddFormStyled,
  ProductAddLabelStyled,
  ProductAddInputStyled,
  ProductAddFormTextStyled,
  ProductAddButtonStyled,
  ProductsListStyled,
  ProductsListEmptyTextStyled,
  NewCartAddButtonStyled,
} from '../Products/Products.styled';
import { getProducts } from 'redux/products/productsSlice';
import { getProductsIsLoading } from 'redux/products/productsSlice';
import { ProductsItem } from './ProductsItem';
import { BiCartAdd } from 'react-icons/bi';
import { IoMdAddCircle } from 'react-icons/io';
import { Loader } from 'components/Loader';
import { addCart } from 'redux/carts/operations';

export const UserAddCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsIsLoading);

  const handleProductSubmit = e => {
    e.preventDefault();
    const id = e.currentTarget.elements[0].value;
    const quantity = e.currentTarget.elements[1].value;
    if (id === '' || quantity === '') {
      return;
    }
    if (products.some(product => product.id === Number(id))) {
      e.currentTarget.reset();
      return;
    }
    dispatch(fetchProductById({ id, quantity }));
    e.currentTarget.reset();
  };

  const handleCartSubmit = e => {
    e.preventDefault();
    const userId = e.currentTarget.elements[0].value;

    if (userId === '') {
      return;
    }

    const newCart = products.map(({ id, quantity }) => {
      return { id, quantity };
    });

    dispatch(addCart({ userId, products: newCart }));
    e.currentTarget.reset();
  };

  return (
    <>
      <ProductAddFormTextStyled>Add new cart</ProductAddFormTextStyled>
      <ProductAddFormStyled onSubmit={handleProductSubmit}>
        <ProductAddLabelStyled>
          Product ID:
          <ProductAddInputStyled type={'number'}></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddLabelStyled>
          Quantity:
          <ProductAddInputStyled type={'number'}></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddButtonStyled>
          Add product <IoMdAddCircle />
        </ProductAddButtonStyled>
      </ProductAddFormStyled>
      {isLoading && <Loader />}
      {products.length !== 0 ? (
        <>
          <ProductsListStyled>
            {products.map(({ title, quantity, id }) => (
              <ProductsItem key={id} title={title} quantity={quantity} />
            ))}
          </ProductsListStyled>
          <ProductAddFormStyled onSubmit={handleCartSubmit}>
            <ProductAddLabelStyled>
              User ID:
              <ProductAddInputStyled type={'number'}></ProductAddInputStyled>
            </ProductAddLabelStyled>
            <NewCartAddButtonStyled>
              Add cart <BiCartAdd />
            </NewCartAddButtonStyled>
          </ProductAddFormStyled>
        </>
      ) : (
        <ProductsListEmptyTextStyled>
          Your cart is currently empty
        </ProductsListEmptyTextStyled>
      )}
    </>
  );
};

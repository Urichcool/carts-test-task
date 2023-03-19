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
import { toast } from 'react-toastify';

export const UserAddCart = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const isLoading = useSelector(getProductsIsLoading);

  const handleProductSubmit = e => {
    e.preventDefault();
    const id = e.currentTarget.elements[0].value;
    const quantity = e.currentTarget.elements[1].value;
    if (id === '' || quantity === '') {
      return toast.warn('Oops, you are missing a required field');
    }

    if (products.some(product => Number(id) === product.id)) {
      return toast.warn('This product is already in cart');
    }

    dispatch(fetchProductById({ id, quantity }));
    e.currentTarget.reset();
  };

  const handleCartSubmit = e => {
    e.preventDefault();
    const userId = e.currentTarget.elements[0].value;

    if (userId === '') {
      return toast.warn('Please enter your user number');
    }

    const newCart = products.map(({ id, quantity }) => {
      return { id, quantity };
    });

    dispatch(addCart({ userId, products: newCart }));
    e.currentTarget.reset();
  };

  return (
    <>
      <ProductAddFormTextStyled>Add a new cart</ProductAddFormTextStyled>
      <ProductAddFormStyled onSubmit={handleProductSubmit}>
        <ProductAddLabelStyled>
          Product ID:
          <ProductAddInputStyled
            type={'number'}
            min={'0'}
          ></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddLabelStyled>
          Quantity:
          <ProductAddInputStyled
            type={'number'}
            min={'0'}
          ></ProductAddInputStyled>
        </ProductAddLabelStyled>
        <ProductAddButtonStyled>
          <span>Add product</span>
          <IoMdAddCircle />
        </ProductAddButtonStyled>
      </ProductAddFormStyled>
      {isLoading && <Loader />}
      {products.length !== 0 ? (
        <>
          <ProductsListStyled>
            {products.map(({ title, quantity, id }) => (
              <ProductsItem
                key={id}
                title={title}
                quantity={quantity}
                id={id}
              />
            ))}
          </ProductsListStyled>
          <ProductAddFormStyled onSubmit={handleCartSubmit}>
            <ProductAddLabelStyled>
              User number:
              <ProductAddInputStyled
                type={'number'}
                min={'0'}
              ></ProductAddInputStyled>
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

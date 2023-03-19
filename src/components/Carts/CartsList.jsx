import { CartsListStyled } from './CartsList.styled';
import { useSelector } from 'react-redux';
import { getCarts } from 'redux/carts/cartsSlice';
import { CartsListItem } from './CartsListItem';
import { useState, useCallback } from 'react';
import { ChartModal } from 'components/Modal/ChartModal';



export const CartsList = () => {
  const carts = useSelector(getCarts);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState({})

 const openModal = e => {
    if (e.target.closest('a')) {
      const eventElement = carts.find(
        cart => cart.id.toString() === e.target.closest('a').id
      );
      setCart(eventElement);
      togleModal();
    }
  };

  const togleModal = useCallback(() => {
    setShowModal(!showModal);
  }, [showModal]);

  return (
    <>
    <CartsListStyled onClick={openModal}>
      {carts.map(({ id, total, discountedTotal, userId }) => {
        return (
          <CartsListItem
            key={id}
            total={total}
            discountedTotal={discountedTotal}
            userId={userId}
            id={id}
          />
        );
      })}
    </CartsListStyled>
      {showModal && <ChartModal cart={cart} onClose={togleModal} />}
      </>
  );
};

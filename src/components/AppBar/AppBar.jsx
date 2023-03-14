import {
  AppHeaderStyled,
  AppHeaderNav,
  AppHeaderNavLink,
} from './AppBar.styled';
import { AppContainerStyled } from 'components/App.styled';
import { BsFillCartFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';

export const AppBar = () => {
  return (
    <AppHeaderStyled>
      <AppContainerStyled>
        <AppHeaderNav>
          <AppHeaderNavLink to={'/'}>
            <AiFillHome />
            Home
          </AppHeaderNavLink>
          <AppHeaderNavLink to={'carts'}>
            <BsFillCartFill />
            Carts
          </AppHeaderNavLink>
        </AppHeaderNav>
      </AppContainerStyled>
    </AppHeaderStyled>
  );
};

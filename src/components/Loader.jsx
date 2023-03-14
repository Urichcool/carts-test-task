import { AppLoaderStyled } from './App.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
      <AppLoaderStyled>
      <ThreeDots color="orange" />
    </AppLoaderStyled>
  )
}
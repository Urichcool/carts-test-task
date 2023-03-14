import { Home } from 'components/Home/Home';
import { AppContainerStyled } from 'components/App.styled';
import { Helmet } from 'react-helmet';

export const HomePage = () => {
  return (
    <AppContainerStyled>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Home />
    </AppContainerStyled>
  );
};

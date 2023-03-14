import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';
import { AppLoaderStyled } from './App.styled';
import { ThreeDots } from 'react-loader-spinner';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense
        fallback={
          <AppLoaderStyled>
            <ThreeDots color="orange" />
          </AppLoaderStyled>
        }
      ></Suspense>
      <Outlet />
    </>
  );
};

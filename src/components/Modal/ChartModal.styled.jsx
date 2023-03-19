import styled from '@emotion/styled';

export const ChartModalOverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ChartModalBodyStyled = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ChartModalContainerStyled = styled.div`
position: relative;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
width: 1200px;
border-radius: 4px;
`;

export const ChartModalCloseButtonStyled = styled.button`
  position: absolute;
  top: 10px;
  border:none;
  right: 10px;
  background-color: transparent;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover,
  &:focus {
    color: red;
    transition: 500ms;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;



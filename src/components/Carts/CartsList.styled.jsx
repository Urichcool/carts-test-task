import styled from '@emotion/styled';

export const CartsListStyled = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  padding:50px;
`;

export const CartsListItemStyled = styled.li`
position: relative;
  color: #cecccc;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1d1d1d;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    svg{
      width: 30px;
      height: 30px;
    }
`;

export const CartsListItemTextStyled = styled.p`
margin:0;
  margin-bottom: 5px;
  &:first-of-type {
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 18px;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const CartsDeleteButtonStyled = styled.button`
position:absolute;
top:10px;
right:10px;
background-color:transparent;
  color: #cecccc;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: 1px, solid, #cecccc;
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

export const ProductAddFormTextSyled = styled.p`
  padding-top: 50px;
  text-align: center;
  margin: 0;
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 25px;
`;

export const ProductAddFormStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ProductAddLabelStyled = styled.label`
  display: flex;
  align-items: center;
  font-weight: 500;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export const ProductAddInputStyled = styled.input`
  margin-left: 5px;
  width: 10px;
  outline: none;
  border-radius: 2px;
  border: 1px solid gray;
  &:hover,
  &:focus,
  &:active {
    border-color: #de07f1;
    transition: 500ms;
  }
`;

export const ProductAddButtonStyled = styled.button`
font-size: 16px;
  color: #cecccc;
  background-color: #1794dd;
  margin: 0;
  padding: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  &:hover,
  &:focus {
    color: #de07f1;
    transition: 500ms;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;




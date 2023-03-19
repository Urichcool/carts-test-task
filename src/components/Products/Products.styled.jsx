import styled from '@emotion/styled';

export const ProductAddFormTextStyled = styled.p`
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
  margin-bottom: 15px;
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
  width: 40px;
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
    margin-left: 5px;
    @media (max-width: 479px) {
      margin:0;
    }
  }
  span {
    display: block;
    @media (max-width: 479px) {
      display: none;
    }
  }
`;

export const ProductsListStyled = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
  margin: 0;
  padding: 0;
margin-bottom: 20px;
`;

export const ProductsListItemStyled = styled.li`

position: relative;
  padding: 10px;
  border-radius: 4px;
  background-color: #1d1d1d;
  margin-bottom: 15px;
  &:last-child {
    margin-bottom: 0;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  
`;

export const ProductsListTextStyled = styled.p`
  font-size: 20px;
  color: #cecccc;
  margin: 0;
  display: flex;
  align-items: center;
  margin-right: 150px;
  svg {
    margin-right: 5px;
  }
  @media (min-width: 480px) {
   margin-right: 275px;
  }
`;


export const ProductDeleteButtonStyled = styled.button`
  position: absolute;
  top: 50;
  right: 10px;
  background-color: transparent;
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

export const ProductsListEmptyTextStyled = styled.p`
  font-size: 20px;
  margin: 0;
  display: flex;
  justify-content: center;
  color: red;
`;

export const NewCartAddButtonStyled = styled.button`
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
    margin-left: 5px;
  }
`;

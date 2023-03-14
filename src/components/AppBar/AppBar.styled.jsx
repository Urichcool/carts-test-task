import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppHeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #1794dd;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const AppHeaderNav = styled.nav`
    display: flex;
    align-items: center;
`

export const AppHeaderNavLink = styled(NavLink)`
  text-decoration: none;
  color: #cecccc;
  font-size: 25px;
  font-weight: 700;
  margin-right: 25px;
  display: flex;
  align-items: center;
  width: 160px;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    color: #de07f1;
  }
  &:hover:not(.active),
  &:focus-visible:not(.active) {
    color: #de07f1;
    transition: 500ms;
  }
  svg {
    margin-right: 5px;
  }
`;

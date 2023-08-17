import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AddButtonStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 12px;
  border-radius: 8px;
  gap: 16px;
  color: var(--main-white);
  background-color: var(--main-blue);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  :hover {
    background-color: var(--accent-blue);
  }
`;

import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const CreateEventWrapper = styled.div`
  padding-top: 40px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1280px) {
    padding-top: 20px;
  }
`;

export const BackBtn = styled(NavLink)`
  display: flex;
  gap: 8px;
  color: var(--main-blue);
  margin-bottom: 18px;
  :hover {
    color: var(--aсcent-blue);
  }
`;

export const CreateTitle = styled.h2`
  color: var(--main-black);
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 25px ;
`;
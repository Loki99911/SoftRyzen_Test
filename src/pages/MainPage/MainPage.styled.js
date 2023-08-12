import styled from 'styled-components';
export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const BarTitle = styled.h2`
  color: var(--main-black);
  font-size: 32px;
  font-weight: 600;
`;

export const SelectItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`;

export const CardsWrap = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 24px;
  row-gap: 24px;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 24px;
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    row-gap: 40px;
  }
`;

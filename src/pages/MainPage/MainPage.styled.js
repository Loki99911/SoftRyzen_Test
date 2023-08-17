import styled from 'styled-components';

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-top: 40px;
  margin-bottom: 40px;
  @media screen and (min-width: 768px) {
    margin-bottom: 96px;
    position: relative;
  }
  @media screen and (min-width: 1280px) {
    position: static;
    justify-content: space-between;
    padding-top: 60px;
    margin-bottom: 40px;
  }
`;

export const FilterWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const BarTitle = styled.h2`
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 120px;
    left: 0;
    color: var(--main-black);
    font-size: 32px;
    font-weight: 600;
  }
  @media screen and (min-width: 1280px) {
    position: static;
  }
`;

export const SelectItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    padding: 0px 24px;
  }
`;

export const SelectItemText = styled.p`
  /* display: flex; */
  /* white-space: nowrap; */
`;

export const SelectHolderText = styled.p`
  margin-right: 16px;
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

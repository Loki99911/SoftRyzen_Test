import styled from 'styled-components';
export const HeaderElem = styled.header`
  border-bottom: 1px solid var(--main-blue);
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    height: 92px;
    padding: 22px 0;
    justify-content: space-between;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 1280px) {
  }
`;

export const HeaderTitle = styled.h1`
  font-family: 'Alata', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--main-blue);
`;
export const InputWrapper = styled.div`
  position: relative;
  margin-left: 0;
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }
`;
export const HeaderInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 12px;
  border: none;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  padding-left: 48px;
  
  @media screen and (min-width: 768px) {
    width: 368px;
    margin-right: 24px;
  }
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  left: 24px;
  top:50%;
  transform: translate(-50%, -50%);
`;

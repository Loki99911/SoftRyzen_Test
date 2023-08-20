import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: grid;
  row-gap: 20px;
  & > *:nth-child(2) {
    grid-row: span 2;
  }

  @media screen and (min-width: 768px) {
    grid-auto-flow: column;
    column-gap: 24px;
    grid-template: 1fr 1fr 1fr 1fr 1fr / repeat(2, 1fr);
  }

  @media screen and (min-width: 1280px) {
    column-gap: 42px;
    grid-template: 1fr 1fr 1fr / repeat(3, 1fr);
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  /* width: 100%; */
  border: 1px solid red;

  @media screen and (min-width: 768px) {
    /* width: calc((100% - 24px) / 2); */
  }

  @media screen and (min-width: 1280px) {
    /* width: calc((100% - 84px) / 3); */
  }
`;

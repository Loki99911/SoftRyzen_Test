import styled from 'styled-components';
import bgImage from "../../images/BG.png"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  margin: 0px auto;
  padding: 0 25px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 80px;
  }
`;

export const MainBg = styled.div`
width: 100%;
height: calc(100vh - 92px);
background-image:url(${bgImage});
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-color: #ffffff;

`;
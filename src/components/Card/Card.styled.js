import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const InfoThumb = styled.div`
margin-top: -40px;
  transform: translateY(0px);
  transition: transform 250ms ease-in-out;
`;

export const CardItem = styled.li`
  display: flex;
  height: 480px;
  flex-direction: column;
  flex-shrink: 0;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  overflow: hidden;
  cursor: pointer;
  &:hover ${InfoThumb} {
    transform: translateY(-64px);
  }
`;

export const CardThumb = styled.div`
  position: relative;
`;
export const PriorityWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;

  display: flex;
  align-items: center;
`;
export const CardCategory = styled.span`
  margin-right: 12px;
  padding: 6px 12px;
  background-color: var(--main-white);
  border-radius: 8px;

  color: var(--main-blue);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-transform: capitalize;
`;
export const CardPriority = styled.span`
  margin-right: 12px;
  padding: 6px 12px;
  background-color: var(--main-white);
  border-radius: 8px;

  color: var(--main-blue);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  text-transform: capitalize;
`;

export const CardImg = styled.img`
  width: 272px;
  height: 336px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 332px;
    height: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 302px;
  }
`;

export const TimeDetails = styled.div`
  padding: 8px 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
`;
export const CardDate = styled.span`
  color: var(--main-blue);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
`;
export const CardLocation = styled.span`
  color: var(--main-blue);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.71;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--main-white);
  padding-top: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 24px;
  gap: 16px;
`;
export const CardTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-transform: capitalize;
`;
export const CardDescription = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.42;
  width: 100%;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardLinkWrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 8px 16px 16px 16px;
`;
export const CardMoreInfoLink = styled(Link)`
  display: block;
  width: 114px;
  margin-left: auto;

  padding: 10px 24px;
  border-radius: 8px;
  background-color: var(--main-blue);
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  color: var(--main-white);
  line-height: 1.42;
  text-align: center;

  transition: background-color 250ms ease-in-out;

  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--aсcent-blue);
  }
`;

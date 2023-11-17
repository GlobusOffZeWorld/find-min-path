import styled from 'styled-components';

import { devices } from '@/constants/devices';

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 10px;
  @media ${devices.tablet} {
    gap: 20px;
  }
  @media ${devices.desktop} {
    gap: 40px;
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: row;
  align-self: start;
  gap: 10px;
  align-items: center;
  @media ${devices.desktop} {
    gap: 20px;
  }
`;

export const StyledH1 = styled.h1`
  font-size: 18px;
  text-align: center;
  @media ${devices.tablet} {
    font-size: 20px;
  }
  @media ${devices.desktop} {
    font-size: 28px;
  }
`;

export const StyledH2 = styled.h1`
  font-size: 14px;
  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.desktop} {
    font-size: 20px;
  }
`;

export const ResizedImage = styled.img`
  width: 25px;
  height: 25px;
  @media ${devices.desktop} {
    width: 50px;
    height: 50px;
  }
`;

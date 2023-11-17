import styled from 'styled-components';

import { devices } from './constants/devices';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 50px;
  gap: 20px;
  background: linear-gradient(135deg, #a18484, #8aa9c0);
  @media ${devices.desktop} {
    flex-direction: row;
  }
`;

export const Info = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vmin;
  gap: 20px;
  @media ${devices.desktop} {
    width: 50%;
    height: 100%;
  }
`;

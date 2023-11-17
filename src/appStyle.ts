import styled from 'styled-components';

import { devices } from './constants/devices';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 10px;
  gap: 20px;
  background: #dae2f8;
  background: -webkit-linear-gradient(135deg, #dae2f8, #d6a4a4);
  background: linear-gradient(135deg, #dae2f8, #d6a4a4);
  overflow-y: auto;
  touch-action: manipulation;
  @media ${devices.tablet} {
    justify-content: space-between;
    padding: 50px 20px;
    flex-direction: row;
  }
  @media ${devices.desktop} {
    padding: 50px;
  }
`;

export const Info = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  @media ${devices.tablet} {
    height: 100%;
  }
`;

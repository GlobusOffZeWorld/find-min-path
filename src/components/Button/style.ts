import styled from 'styled-components';

import { devices } from '@/constants/devices';

export const StyledButton = styled.button`
  background-color: #00000060;
  border-radius: 14px;
  border: none;
  color: white;
  width: fit-content;
  height: fit-content;
  padding: 8px 10px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #49494961;
  }
  @media ${devices.tablet} {
    font-size: 16px;
  }
  @media ${devices.desktop} {
    font-size: 20px;
    padding: 15px 25px;
    border-radius: 28px;
  }
`;

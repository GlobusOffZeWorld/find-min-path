import styled from 'styled-components';

import { devices } from '@/constants/devices';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  gap: 20px;
  @media ${devices.desktop} {
    flex-direction: row;
    gap: 80px;
  }
`;

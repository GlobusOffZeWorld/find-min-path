import styled from 'styled-components';

import { FIELD_SIZE } from '@/constants';
import { devices } from '@/constants/devices';

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: repeat(${FIELD_SIZE}, 1fr);
  grid-template-columns: repeat(${FIELD_SIZE}, 1fr);
  flex-wrap: wrap;
  gap: 2px;
  background-color: #00000060;
  height: 90vmin;
  aspect-ratio: 1 / 1;
  @media ${devices.desktop} {
    flex-direction: row;
    min-width: 90vmin;
    max-width: 90vmin;
    width: 100%;
  }
`;

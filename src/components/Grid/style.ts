import styled from 'styled-components';

import { FIELD_SIZE } from '@/constants';
import { devices } from '@/constants/devices';

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: repeat(${FIELD_SIZE}, 1fr);
  grid-template-columns: repeat(${FIELD_SIZE}, 1fr);
  flex-wrap: wrap;
  gap: 1px;
  background-color: #00000060;
  height: 90vmin;
  width: auto;
  aspect-ratio: 1 / 1;
  @media ${devices.tablet} {
    width: 90vmin;
    height: auto;
  }
`;

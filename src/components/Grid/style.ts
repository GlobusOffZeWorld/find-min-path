import styled from 'styled-components';

import { FIELD_SIZE } from '@/constants';

export const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: repeat(${FIELD_SIZE}, 1fr);
  grid-template-columns: repeat(${FIELD_SIZE}, 1fr);
  flex-wrap: wrap;
  gap: 2px;
  background-color: #00000060;
  width: 800px;
  height: 800px;
`;

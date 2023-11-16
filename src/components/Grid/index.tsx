import styled from 'styled-components';

import { Cell } from '@/components/Cell';
import { FIELD_SIZE } from '@/constants';

const Wrapper = styled.div`
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

export const Grid = () => {
  const cells = new Array(FIELD_SIZE ** 2).fill(0);

  return (
    <Wrapper>
      {cells.map((_, index) => {
        return (
          <Cell
            key={index}
            row={Math.trunc(index / FIELD_SIZE)}
            column={index % FIELD_SIZE}
          />
        );
      })}
    </Wrapper>
  );
};

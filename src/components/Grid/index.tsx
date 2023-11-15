import styled from 'styled-components';

import { Cell } from '@/components/Cell';

const Wrapper = styled.div`
  display: grid;
  align-content: center;
  grid-template-rows: repeat(10, 1fr);
  grid-template-columns: repeat(10, 1fr);
  flex-wrap: wrap;
  gap: 1px;
  background-color: black;
  width: 800px;
  height: 800px;
`;

export const Grid = () => {
  const cells = new Array(100).fill(0);

  return (
    <Wrapper>
      {cells.map((_, index) => {
        return (
          <Cell
            key={index}
            row={Math.trunc(index / 10)}
            column={index % 10}
          />
        );
      })}
    </Wrapper>
  );
};

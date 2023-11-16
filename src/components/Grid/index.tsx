import { Cell } from '@/components/Cell';
import { FIELD_SIZE } from '@/constants';

import { Wrapper } from './style';

export const Grid = () => {
  const cells = new Array(FIELD_SIZE ** 2).fill(0);

  return (
    <Wrapper
      onContextMenu={e => e.preventDefault()}
      onClick={e => e.preventDefault()}
    >
      {cells.map((_, index) => {
        return (
          <Cell
            key={index}
            row={Math.trunc(index / FIELD_SIZE)}
            col={index % FIELD_SIZE}
          />
        );
      })}
    </Wrapper>
  );
};

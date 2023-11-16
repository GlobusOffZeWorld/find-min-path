import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@/components/Button';
import { clearGrid } from '@/redux/slices/gridSlice';
import { clearPath, setPath } from '@/redux/slices/pathSlice';
import { RootState } from '@/redux/store';
import { Cell } from '@/types';
import { findMinPath } from '@/utils/findMinPath';

import { Wrapper } from './style';

export const ButtonContainer = () => {
  const matrix = useSelector((state: RootState) => state.grid.matrix);

  const start = useSelector((state: RootState) => state.path.start);
  const end = useSelector((state: RootState) => state.path.end);

  const dispatch = useDispatch();

  const handleBuildPathBtn = () => {
    if (start && end) {
      const path = findMinPath(matrix, start, end);
      const pathMatrix = matrix.map(row => row.map(col => col));
      path!.forEach((edge: Cell) => (pathMatrix[edge[0]][edge[1]] = 2));
      dispatch(setPath({ pathMatrix: pathMatrix }));
    }
  };

  const handleClearBtn = () => {
    dispatch(clearGrid());
    dispatch(clearPath());
  };

  return (
    <Wrapper>
      <Button onClick={handleClearBtn}>Clear field</Button>
      <Button onClick={handleBuildPathBtn}>Build path</Button>
    </Wrapper>
  );
};

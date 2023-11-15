import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setCell } from '@/redux/slices/gridSlice';
import { RootState } from '@/redux/store';

interface Cell {
  row: number;
  column: number;
}

const Wrapper = styled.button<{ $isPressed: number }>`
  background-color: ${props => (props.$isPressed === 1 ? '#f0a0a0' : '#ffffff')};
  width: 100%;
  height: 100%;
  border: none;
`;

export const Cell: FC<Cell> = ({ row, column }) => {
  const { matrix } = useSelector((state: RootState) => state.grid);
  const dispatch = useDispatch();
  return (
    <Wrapper
      $isPressed={matrix[row][column]}
      onMouseDown={() => {
        dispatch(setCell({ row, column, value: matrix[row][column] === 1 ? 0 : 1 }));
      }}
    />
  );
};

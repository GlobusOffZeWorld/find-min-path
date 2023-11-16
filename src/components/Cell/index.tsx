import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { setCell } from '@/redux/slices/gridSlice';
import { setEnd, setStart } from '@/redux/slices/pathSlice';
import { RootState } from '@/redux/store';

interface Cell {
  row: number;
  column: number;
}

const Wrapper = styled.button<{ $color: string }>`
  background-color: ${props => props.$color};
  width: 100%;
  height: 100%;
  border: none;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    outline: 2px solid #ffffff;
  }
`;

const pickColor = (value: number) => {
  switch (value) {
    case 1:
      return '#f0a0a0';
    case 2:
      return '#a0f0a4';
    case 3:
      return '#767d94';
    case 4:
      return '#767d94';
    default:
      return '#ffffff';
  }
};

enum CellType {
  empty = 0,
  wall = 1,
  path = 2,
  start = 3,
  end = 4
}

export const Cell: FC<Cell> = ({ row, column }) => {
  const path = useSelector((state: RootState) => state.path.path);
  const start = useSelector((state: RootState) => state.path.start);
  const end = useSelector((state: RootState) => state.path.end);
  const [cellState, setCellState] = useState<CellType>(CellType.empty);
  useEffect(() => {
    setCellState(path[row][column]);
  }, path);

  const dispatch = useDispatch();
  return (
    <Wrapper
      $color={pickColor(cellState)}
      onContextMenu={e => {
        e.preventDefault();
        const isStartedType =
          start === null
            ? { pointType: CellType.start, cb: setStart }
            : { pointType: CellType.end, cb: setEnd };

        if (end !== null && start !== null) {
          if (cellState !== CellType.end && cellState !== CellType.start) {
            return;
          }
        }
        switch (cellState) {
          case CellType.empty:
            setCellState(isStartedType.pointType);
            dispatch(isStartedType.cb({ cell: [row, column] }));
            break;
          case CellType.start:
            setCellState(CellType.empty);
            dispatch(setStart({ cell: null }));
            break;
          case CellType.end:
            setCellState(CellType.empty);
            dispatch(setEnd({ cell: null }));
            break;
        }
      }}
      onClick={() => {
        if (cellState === CellType.start || cellState === CellType.end) {
          return;
        }
        setCellState(cellState === 1 ? 0 : 1);
        dispatch(setCell({ row, column, value: cellState === 1 ? 0 : 1 }));
      }}
    />
  );
};

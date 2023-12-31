import { FC, MouseEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { cellColor } from '@/constants';
import { setCell } from '@/redux/slices/gridSlice';
import { setEnd, setStart } from '@/redux/slices/pathSlice';
import { RootState } from '@/redux/store';
import { CellProps, CellType } from '@/types';

import { StyledCell } from './style';

export const Cell: FC<CellProps> = ({ row, col }) => {
  const pathCell = useSelector((state: RootState) => state.path.path[row][col]);
  const start = useSelector((state: RootState) => state.path.start);
  const end = useSelector((state: RootState) => state.path.end);
  const [cellState, setCellState] = useState<CellType>(CellType.empty);
  useEffect(() => {
    setCellState(pathCell);
  }, [pathCell]);

  const dispatch = useDispatch();

  const handleRightMouseClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
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
          dispatch(isStartedType.cb({ cell: [row, col] }));
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
    },
    [start, end]
  );

  const handleLeftMouseClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (cellState === CellType.start || cellState === CellType.end) {
        return;
      }
      if (!(e.buttons === 1 && e.type === 'mouseenter') && e.type !== 'mousedown') {
        return;
      }
      setCellState(cellState === CellType.wall ? CellType.empty : CellType.wall);
      dispatch(
        setCell({ row, col, value: cellState === CellType.wall ? CellType.empty : CellType.wall })
      );
    },
    [cellState]
  );

  const handleMouseEvent = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      if (e.button === 0) {
        handleLeftMouseClick(e);
      } else if (e.button === 2) {
        handleRightMouseClick(e);
      }
    },
    [handleLeftMouseClick, handleRightMouseClick]
  );

  return (
    <StyledCell
      $color={cellColor[cellState]}
      onMouseEnter={handleMouseEvent}
      onMouseDown={handleMouseEvent}
      onDoubleClick={handleRightMouseClick}
    />
  );
};

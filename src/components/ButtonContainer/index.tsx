import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { Button } from '@/components/Button';
// import { clear } from '@/redux/slices/clearTriggerSlice';
import { clearGrid } from '@/redux/slices/gridSlice';
import { clearPath, setEnd, setPath, setStart } from '@/redux/slices/pathSlice';
import { RootState } from '@/redux/store';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 800px;
`;

type Cell = [number, number];

function calculate(grid: number[][], start: Cell, end: Cell) {
  class Queue<T> {
    private items: T[];

    constructor() {
      this.items = [];
    }

    enqueue(element: T): void {
      this.items.push(element);
    }

    dequeue(): T | null {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift() || null;
    }

    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  function shortestPath(grid: number[][], start: Cell, end: Cell): Cell[] | null {
    const rows = grid.length;
    const cols = grid[0].length;

    const visited: boolean[][] = Array.from({ length: rows }, () => Array(cols).fill(false));
    const distances: number[][] = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    const previous: (Cell | null)[][] = Array.from({ length: rows }, () => Array(cols).fill(null));

    const queue = new Queue<Cell>();
    const directions: Cell[] = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ]; // Up, Down, Left, Right

    const isValidCell = (row: number, col: number): boolean => {
      return (
        row >= 0 &&
        row < rows &&
        col >= 0 &&
        col < cols &&
        grid[row][col] !== 1 &&
        !visited[row][col]
      );
    };

    queue.enqueue(start);
    visited[start[0]][start[1]] = true;
    distances[start[0]][start[1]] = 0;

    while (!queue.isEmpty()) {
      const current = queue.dequeue();

      if (current === null) {
        continue;
      }

      if (current[0] === end[0] && current[1] === end[1]) {
        break; // Reached the end cell
      }

      for (const direction of directions) {
        const newRow = current[0] + direction[0];
        const newCol = current[1] + direction[1];

        if (isValidCell(newRow, newCol)) {
          queue.enqueue([newRow, newCol]);
          visited[newRow][newCol] = true;
          distances[newRow][newCol] = distances[current[0]][current[1]] + 1;
          previous[newRow][newCol] = current;
        }
      }
    }

    if (distances[end[0]][end[1]] === Infinity) {
      return null; // No path found
    }

    const path: Cell[] = [];
    let current: Cell | null = end;

    while (current !== null) {
      path.unshift(current);
      current = previous[current[0]][current[1]];
    }

    return path;
  }

  const path = shortestPath(grid, start, end);
  return path;
}

export const ButtonContainer = () => {
  const matrix = useSelector((state: RootState) => state.grid.matrix);

  const start = useSelector((state: RootState) => state.path.start);
  const end = useSelector((state: RootState) => state.path.end);

  const dispatch = useDispatch();
  console.log('rerendered');

  const handleBuildPathBtn = () => {
    if (start && end) {
      const path = calculate(matrix, start, end);
      const pathMatrix = matrix.map(row => row.map(column => column));
      path!.forEach((edge: Cell) => (pathMatrix[edge[0]][edge[1]] = 2));
      dispatch(setPath({ pathMatrix: pathMatrix }));
    }
  };

  const handleClearBtn = () => {
    dispatch(clearGrid());
    dispatch(clearPath());
    dispatch(setStart({ cell: null }));
    dispatch(setEnd({ cell: null }));
  };

  return (
    <Wrapper>
      <Button onClick={handleClearBtn}>Clear field</Button>
      <Button onClick={handleBuildPathBtn}>Build path</Button>
    </Wrapper>
  );
};

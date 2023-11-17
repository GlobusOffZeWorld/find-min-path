import { Cell } from '@/types';

export const findMinPath = (grid: number[][], start: Cell, end: Cell): Cell[] | null => {
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
    ];

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
        break;
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
      return null;
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
};

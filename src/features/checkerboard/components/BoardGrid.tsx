import React from "react";
import { Board } from "../styles/styled";
import { BoardSquare } from "./BoardSquare";
import { BoardState } from "../types";

type BoardGridProps = {
  board: BoardState;
  size: number;
  onSquareClick: (row: number, col: number) => void;
};

export const BoardGrid: React.FC<BoardGridProps> = ({
  board,
  size,
  onSquareClick,
}) => (
  <Board size={size}>
    {board.map((row, rowIndex) =>
      row.map((square, colIndex) => (
        <BoardSquare
          key={`${rowIndex}-${colIndex}`}
          {...square}
          onClick={() => onSquareClick(rowIndex, colIndex)}
        />
      ))
    )}
  </Board>
);

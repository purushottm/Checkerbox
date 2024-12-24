import { useState, useCallback } from "react";
import { BOARD_CONFIG } from "../constants";
import {
  UseCheckerboardProps,
  UseCheckerboardReturn,
  BoardState,
} from "../types";

const initializeBoard = (size: number): BoardState => {
  return Array(size)
    .fill(null)
    .map((_, row) =>
      Array(size)
        .fill(null)
        .map((_, col) => ({
          count: 0,
          isBlack: (row + col) % 2 === 1,
        }))
    );
};

export const useCheckerBoard = ({
  initialSize,
  minSize = BOARD_CONFIG.MIN_SIZE,
  maxSize = BOARD_CONFIG.MAX_SIZE,
}: UseCheckerboardProps): UseCheckerboardReturn => {
  const [boardSize, setBoardSize] = useState(initialSize);
  const [board, setBoard] = useState<BoardState>(initializeBoard(initialSize));
  const [maxClicks, setMaxClicks] = useState(0);

  const handleSquareClick = useCallback(
    (row: number, col: number) => {
      setBoard((prevBoard) => {
        const newBoard = [...prevBoard];
        newBoard[row] = [...newBoard[row]];
        newBoard[row][col] = {
          ...newBoard[row][col],
          count: newBoard[row][col].count + 1,
        };

        const newMaxClicks = Math.max(maxClicks, newBoard[row][col].count);
        setMaxClicks(newMaxClicks);

        return newBoard;
      });
    },
    [maxClicks]
  );

  const handleBoardSizeChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newSize = Math.min(
        Math.max(minSize, Number(event.target.value)),
        maxSize
      );
      setBoardSize(newSize);
      setBoard(initializeBoard(newSize));
      setMaxClicks(0);
    },
    [minSize, maxSize]
  );

  return {
    board,
    boardSize,
    maxClicks,
    handleSquareClick,
    handleBoardSizeChange,
  };
};

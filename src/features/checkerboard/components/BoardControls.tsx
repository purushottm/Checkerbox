import React from "react";
import { BOARD_CONFIG } from "../constants";
import { Controls, Label, Input, MaxClicks } from "../styles/styled";

type BoardControlsProps = {
  boardSize: number;
  maxClicks: number;
  onBoardSizeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const BoardControls: React.FC<BoardControlsProps> = ({
  boardSize,
  maxClicks,
  onBoardSizeChange,
}) => (
  <Controls>
    <Label htmlFor="boardSize">
      {`Board Size (${BOARD_CONFIG.MIN_SIZE}-${BOARD_CONFIG.MAX_SIZE})`}:
    </Label>
    <Input
      id="boardSize"
      type="number"
      min={String(BOARD_CONFIG.MIN_SIZE)}
      max={String(BOARD_CONFIG.MAX_SIZE)}
      value={boardSize}
      onChange={onBoardSizeChange}
    />
    <MaxClicks>Highest Click Count: {maxClicks}</MaxClicks>
  </Controls>
);

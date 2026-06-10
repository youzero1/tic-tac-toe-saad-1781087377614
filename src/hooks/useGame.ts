import { useState, useCallback } from 'react';
import type { GameState, Player } from '@/types';
import { createEmptyBoard, checkWinner, checkDraw } from '@/lib/gameLogic';

const initialState: GameState = {
  board: createEmptyBoard(),
  currentPlayer: 'X',
  status: 'playing',
  winner: null,
  winningLine: null,
  scores: { X: 0, O: 0 },
  draws: 0,
};

export function useGame(): {
  state: GameState;
  handleCellClick: (index: number) => void;
  resetGame: () => void;
  resetAll: () => void;
} {
  const [state, setState] = useState<GameState>(initialState);

  const handleCellClick = useCallback((index: number) => {
    setState((prev) => {
      if (prev.status !== 'playing' || prev.board[index] !== null) return prev;

      const newBoard = [...prev.board];
      newBoard[index] = prev.currentPlayer;

      const result = checkWinner(newBoard);
      if (result) {
        const newScores = { ...prev.scores };
        newScores[result.winner] += 1;
        return {
          ...prev,
          board: newBoard,
          status: 'won',
          winner: result.winner,
          winningLine: result.line,
          scores: newScores,
        };
      }

      if (checkDraw(newBoard)) {
        return {
          ...prev,
          board: newBoard,
          status: 'draw',
          draws: prev.draws + 1,
        };
      }

      return {
        ...prev,
        board: newBoard,
        currentPlayer: prev.currentPlayer === 'X' ? 'O' : 'X',
      };
    });
  }, []);

  const resetGame = useCallback(() => {
    setState((prev) => ({
      ...prev,
      board: createEmptyBoard(),
      currentPlayer: 'X',
      status: 'playing',
      winner: null,
      winningLine: null,
    }));
  }, []);

  const resetAll = useCallback(() => {
    setState(initialState);
  }, []);

  return { state, handleCellClick, resetGame, resetAll };
}

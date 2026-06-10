import clsx from 'clsx';
import type { Board as BoardType } from '@/types';
import Cell from '@/components/Cell';

type BoardProps = {
  board: BoardType;
  winningLine: number[] | null;
  onCellClick: (index: number) => void;
  disabled: boolean;
};

export default function Board({ board, winningLine, onCellClick, disabled }: BoardProps) {
  return (
    <div
      className={clsx(
        'grid gap-3 p-4 rounded-2xl',
        disabled && 'opacity-90'
      )}
      style={{
        gridTemplateColumns: 'repeat(3, 1fr)',
        backgroundColor: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
      }}
    >
      {board.map((cell, index) => (
        <Cell
          key={index}
          value={cell}
          index={index}
          isWinning={winningLine ? winningLine.includes(index) : false}
          onClick={onCellClick}
          disabled={disabled || cell !== null}
        />
      ))}
    </div>
  );
}

import clsx from 'clsx';
import type { CellValue } from '@/types';

type CellProps = {
  value: CellValue;
  index: number;
  isWinning: boolean;
  onClick: (index: number) => void;
  disabled: boolean;
};

export default function Cell({ value, index, isWinning, onClick, disabled }: CellProps) {
  const isEmpty = value === null;

  return (
    <button
      onClick={() => onClick(index)}
      disabled={disabled}
      className={clsx(
        'w-24 h-24 rounded-xl flex items-center justify-center text-5xl font-extrabold transition-all duration-200',
        !disabled && isEmpty && 'hover:scale-105 cursor-pointer',
        disabled && isEmpty && 'cursor-not-allowed',
        isWinning && 'scale-105'
      )}
      style={{
        backgroundColor: isWinning
          ? value === 'X'
            ? 'rgba(99,102,241,0.25)'
            : 'rgba(236,72,153,0.25)'
          : 'var(--color-bg)',
        border: isWinning
          ? value === 'X'
            ? '2px solid var(--color-x)'
            : '2px solid var(--color-o)'
          : '2px solid var(--color-border)',
        color: value === 'X' ? 'var(--color-x)' : value === 'O' ? 'var(--color-o)' : 'transparent',
        boxShadow: isWinning ? '0 0 16px rgba(99,102,241,0.4)' : 'none',
      }}
      aria-label={`Cell ${index + 1}${value ? `, ${value}` : ', empty'}`}
    >
      {value ?? ''}
    </button>
  );
}

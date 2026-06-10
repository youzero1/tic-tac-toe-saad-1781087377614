import type { GameStatus, Player } from '@/types';

type StatusBarProps = {
  status: GameStatus;
  currentPlayer: Player;
  winner: Player | null;
};

export default function StatusBar({ status, currentPlayer, winner }: StatusBarProps) {
  let message = '';
  let color = '#e2e8f0';

  if (status === 'playing') {
    message = `Player ${currentPlayer}'s turn`;
    color = currentPlayer === 'X' ? 'var(--color-x)' : 'var(--color-o)';
  } else if (status === 'won' && winner) {
    message = `Player ${winner} wins! 🎉`;
    color = winner === 'X' ? 'var(--color-x)' : 'var(--color-o)';
  } else if (status === 'draw') {
    message = "It's a draw! 🤝";
    color = '#94a3b8';
  }

  return (
    <div className="mb-6 h-10 flex items-center justify-center">
      <p
        className="text-xl font-bold tracking-wide transition-all duration-300"
        style={{ color }}
      >
        {message}
      </p>
    </div>
  );
}

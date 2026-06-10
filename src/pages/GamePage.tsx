import { useGame } from '@/hooks/useGame';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import StatusBar from '@/components/StatusBar';

export default function GamePage() {
  const { state, handleCellClick, resetGame, resetAll } = useGame();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8" style={{ backgroundColor: 'var(--color-bg)' }}>
      <h1 className="text-5xl font-extrabold tracking-tight mb-8" style={{ color: '#e2e8f0' }}>
        Tic <span style={{ color: 'var(--color-x)' }}>Tac</span> Toe
      </h1>

      <ScoreBoard scores={state.scores} draws={state.draws} />

      <StatusBar
        status={state.status}
        currentPlayer={state.currentPlayer}
        winner={state.winner}
      />

      <Board
        board={state.board}
        winningLine={state.winningLine}
        onCellClick={handleCellClick}
        disabled={state.status !== 'playing'}
      />

      <div className="flex gap-4 mt-8">
        <button
          onClick={resetGame}
          className="px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: 'var(--color-x)' }}
        >
          New Game
        </button>
        <button
          onClick={resetAll}
          className="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 active:scale-95"
          style={{ backgroundColor: 'var(--color-surface)', color: '#94a3b8', border: '1px solid var(--color-border)' }}
        >
          Reset Scores
        </button>
      </div>
    </div>
  );
}

import type { Player } from '@/types';

type ScoreBoardProps = {
  scores: Record<Player, number>;
  draws: number;
};

export default function ScoreBoard({ scores, draws }: ScoreBoardProps) {
  return (
    <div className="flex gap-4 mb-6">
      <ScoreCard label="X" value={scores.X} color="var(--color-x)" />
      <ScoreCard label="Draw" value={draws} color="#64748b" />
      <ScoreCard label="O" value={scores.O} color="var(--color-o)" />
    </div>
  );
}

type ScoreCardProps = {
  label: string;
  value: number;
  color: string;
};

function ScoreCard({ label, value, color }: ScoreCardProps) {
  return (
    <div
      className="flex flex-col items-center justify-center w-24 h-20 rounded-xl"
      style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)' }}
    >
      <span className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color }}>
        {label}
      </span>
      <span className="text-3xl font-extrabold" style={{ color: '#e2e8f0' }}>
        {value}
      </span>
    </div>
  );
}

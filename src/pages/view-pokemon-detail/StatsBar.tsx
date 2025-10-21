import { StatsName } from '@/types';
import { BaseStatsUtils } from '@/utils';

type Props = {
  name: StatsName;
  value: number;
};

export default function StatsBar({ name, value }: Props) {
  const { label, color } = BaseStatsUtils.baseStatsUtils(name);
  const width = Math.min((value / 150) * 100, 100);

  const baseStatsBarStyles = {
    width: `${width}%`,
    backgroundColor: color,
  };

  return (
    <div className="flex gap-4 text-xs">
      <span className="w-5/6 overflow-hidden uppercase">{label}</span>
      <span className="w-auto font-bold" style={{ color }}>
        {value}
      </span>
      <div className="w-full flex items-center rounded-full overflow-hidden relative">
        <div
          style={baseStatsBarStyles}
          className="left-0 h-2 rounded-full z-10"
        ></div>
        <div className="absolute w-full h-2 bg-zinc-800 left-0"></div>
      </div>
    </div>
  );
}

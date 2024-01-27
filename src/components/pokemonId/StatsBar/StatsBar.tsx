"use client";

import { StatsName } from "@/types/statsName";
import { useRef } from "react";
import useStatsBar from "./useStatsBar";

interface StatsBarProps {
  name: StatsName;
  value: number;
}

export default function StatsBar({ name, value }: StatsBarProps) {
  const backgroundBarRef = useRef(null);

  const { label, baseStatsBarStyles, labelColor } = useStatsBar({
    backgroundBarRef,
    name,
    value,
  });

  return (
    <div className="flex gap-4 text-xs">
      <span className="w-5/6 overflow-hidden uppercase">{label}</span>
      <span className="w-auto font-bold" style={labelColor}>
        {value}
      </span>
      <div className="w-full flex items-center rounded-full overflow-hidden relative">
        <div
          style={baseStatsBarStyles}
          className="left-0 h-2 rounded-full z-10"
        ></div>
        <div
          ref={backgroundBarRef}
          className="absolute w-full h-2 bg-zinc-800 left-0"
        ></div>
      </div>
    </div>
  );
}

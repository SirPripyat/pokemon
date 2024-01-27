import { findOutWhatBaseStatIs } from "@/functions/findOutWhatBaseStatIs";
import { StatsName } from "@/types/statsName";
import {
  CSSProperties,
  MutableRefObject,
  useCallback,
  useEffect,
  useState,
} from "react";

interface useStatsBarProps {
  backgroundBarRef: MutableRefObject<null>;
  name: StatsName;
  value: number;
}
export default function useStatsBar({
  backgroundBarRef,
  name,
  value,
}: useStatsBarProps) {
  const [backgroundBarWidth, setBackgroundBarWidth] = useState(0);

  const getBackgroundBarWidth = useCallback(() => {
    if (!backgroundBarRef.current) return;

    setBackgroundBarWidth(
      (backgroundBarRef.current as HTMLDivElement).offsetWidth
    );
  }, [backgroundBarRef]);

  useEffect(() => {
    getBackgroundBarWidth();
  }, [getBackgroundBarWidth]);

  const calculateBackgroundBarWidth = (): number => {
    if (!backgroundBarRef.current) return 0;

    return Math.round((value * backgroundBarWidth) / 150);
  };

  const { label, color } = findOutWhatBaseStatIs[name];

  const baseStatsBarStyles: CSSProperties = {
    width: `${calculateBackgroundBarWidth()}px`,
    backgroundColor: color,
  };

  const labelColor: CSSProperties = {
    color: color,
  };

  useEffect(() => {
    getBackgroundBarWidth();
  }, [getBackgroundBarWidth]);

  return {
    baseStatsBarStyles,
    label,
    labelColor,
  };
}

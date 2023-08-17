import { FC } from "react";
import classNames from "classnames";
import { SpeakerWaveIcon, SpeakerXWaveIcon } from "./Icons";

type VolumeProps = {
  className?: string;
  volume: number;
  changeVolume: (evt: any) => void;
};

const Volume: FC<VolumeProps> = ({ className, volume, changeVolume }) => {
  return (
    <div
      className={classNames(
        "flex flex-col w-full gap-2 text-current",
        className
      )}
    >
      <div
        id="volumn"
        className="flex items-center justify-center w-full text-center text-current text-xl font-medium gap-2"
      >
        {!!volume ? (
          <SpeakerWaveIcon className="text-current" />
        ) : (
          <SpeakerXWaveIcon className="text-current" />
        )}
        <span>%{Math.floor(volume * 100)}</span>
      </div>
      <div className="flex flex-col">
        <input
          className="range range-primary range-xs"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(evt) => changeVolume(evt)}
        />
        <div className="w-full flex justify-between text-current text-[6px] px-2">
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
          <span>|</span>
        </div>
      </div>
    </div>
  );
};

export default Volume;

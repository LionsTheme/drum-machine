import { FC } from "react";
import classNames from "classnames";
import { PlayType, SoundsGroupType, SoundsType } from "@/types/DrumMachineApp";

type KeyboardProps = {
  className?: string;
  soundsGroup: SoundsGroupType;
  play: PlayType;
};

const Keyboard: FC<KeyboardProps> = ({ className, soundsGroup, play }) => {
  return (
    <div className={classNames("keyboard grid grid-cols-3 gap-2", className)}>
      {soundsGroup.map(({ keyCode, key, id, url }: SoundsType) => (
        <button
          className="drum-pad btn btn-primary text-3xl font-bold w-16 h-14 sm:w-20 sm:h-16 focus:outline-none"
          id={`${keyCode}`}
          key={keyCode}
          onClick={() => play(key, id)}
        >
          <audio className="clip" id={key} src={url}></audio>
          {key}
        </button>
      ))}
    </div>
  );
};

export default Keyboard;

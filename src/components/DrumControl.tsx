import { FC, useState } from "react";
import { SpeakerWaveIcon, SpeakerXWaveIcon } from "./Icons";

type DrumControlProps = {
  className?: string;
  volume: number;
  tuneName: string;
  changeVolume: (evt: any) => void;
  chooseHeater: () => void;
  choosePiano: () => void;
};

const DrumControl: FC<DrumControlProps> = ({
  volume,
  changeVolume,
  tuneName,
  chooseHeater,
  choosePiano,
}) => {
  const [instrumentType, setInstrumentType] = useState<string>("heater");

  const handleOnChange = (evnt: any) => {
    if (evnt.target.value === "heater" && "heater" !== instrumentType) {
      chooseHeater();
      setInstrumentType(evnt.target.value);
    } else if (evnt.target.value === "piano" && "piano" !== instrumentType) {
      choosePiano();
      setInstrumentType(evnt.target.value);
    }
  };

  return (
    <div className="drumControl flex flex-col items-center justify-between w-full md:w-52 text-secondary-content not-prose gap-8">
      <div className="flex flex-col w-full gap-2">
        <div
          id="volumn"
          className="flex items-center justify-center w-full text-center text-current text-lg gap-2"
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
          <div className="w-full flex justify-between text-[6px] px-2">
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
            <span>|</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <span
          id="display"
          className="text-current text-3xl text-center font-medium"
        >
          {tuneName}
        </span>
        <div className="flex flex-row items-center justify-center gap-2">
          <input
            className="btn btn-xs rounded text-xs capitalize"
            type="radio"
            name="heater"
            value="heater"
            aria-label="Heater"
            checked={instrumentType === "heater"}
            readOnly
            onClick={handleOnChange}
          />
          <input
            className="btn btn-xs rounded text-xs capitalize"
            type="radio"
            name="piano"
            value="piano"
            aria-label="Piano"
            checked={instrumentType === "piano"}
            readOnly
            onClick={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DrumControl;

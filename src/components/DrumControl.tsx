import { FC, useState } from "react";
import Display from "./Display";
import Volume from "./Volume";
import classNames from "classnames";

type DrumControlProps = {
  className?: string;
  volume: number;
  tuneName: string;
  changeVolume: (evt: any) => void;
  chooseHeater: () => void;
  choosePiano: () => void;
};

const DrumControl: FC<DrumControlProps> = ({
  className,
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
    <div
      className={classNames(
        "drumControl flex flex-col items-center justify-between w-full md:w-52 text-primary-content not-prose gap-8",
        className
      )}
    >
      <Volume volume={volume} changeVolume={changeVolume} />
      <Display
        tuneName={tuneName}
        instrumentType={instrumentType}
        handleOnChange={handleOnChange}
      />
    </div>
  );
};

export default DrumControl;

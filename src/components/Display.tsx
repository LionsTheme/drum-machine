import { FC } from "react";
import classNames from "classnames";

type DisplayProps = {
  className?: string;
  tuneName: string;
  instrumentType: string;
  handleOnChange: (evnt: any) => void;
};

const Display: FC<DisplayProps> = ({
  className,
  tuneName,
  instrumentType,
  handleOnChange,
}) => {
  return (
    <div
      className={classNames(
        "flex flex-col items-center text-current gap-4",
        className
      )}
    >
      <span
        id="display"
        className="text-current text-3xl text-center font-medium"
      >
        {tuneName}
      </span>
      <div className="flex flex-row items-center justify-center gap-2">
        <input
          className={classNames("btn rounded text-xs capitalize", [
            instrumentType === "heater" ? "btn-sm" : "btn-xs",
          ])}
          type="radio"
          name="heater"
          value="heater"
          aria-label="Heater"
          checked={instrumentType === "heater"}
          readOnly
          onClick={handleOnChange}
        />
        <input
          className={classNames("btn btn-xs rounded text-xs capitalize", [
            instrumentType === "piano" ? "btn-sm" : "btn-xs",
          ])}
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
  );
};

export default Display;

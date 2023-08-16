import { useState } from "react";

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  const toggleCheckbox = (): void => {
    setIsChecked(!isChecked);
  };

  return [isChecked, toggleCheckbox];
};

export default useToggle;

"use client";

import { useEffect, useState } from "react";
import { firstSoundsGroup, secondSoundsGroup } from "@/data";
import { PlayType } from "@/types/DrumMachineApp";

const useDrumMachine = (): {
  tuneName: string;
  soundsGroup: typeof firstSoundsGroup;
  volume: number;
  play: PlayType;
  choosePiano: () => void;
  chooseHeater: () => void;
  changeVolume: (evt: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [tuneName, setTuneName] = useState("Heater");
  const [soundsGroup, setSoundsGroup] = useState<typeof firstSoundsGroup>([
    ...firstSoundsGroup,
  ]);
  const [volume, setVolume] = useState(1);

  const play: PlayType = (key, tune) => {
    const audio: HTMLMediaElement | null = document.getElementById(
      key
    ) as HTMLMediaElement;

    if (audio) {
      audio.currentTime = 0;
      audio.volume = volume;
      audio.play();
      setTuneName(tune);
    }
  };

  const handleKeydown = (evt: KeyboardEvent) => {
    for (let sound of firstSoundsGroup) {
      if (evt.keyCode === sound.keyCode) {
        play(sound.key, sound.id);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const choosePiano = () => {
    setSoundsGroup([...secondSoundsGroup]);
    setTuneName("Piano");
  };

  const chooseHeater = () => {
    setSoundsGroup([...firstSoundsGroup]);
    setTuneName("Heater");
  };

  const changeVolume = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(evt.target.value));
  };

  return {
    tuneName,
    soundsGroup,
    volume,
    play,
    choosePiano,
    chooseHeater,
    changeVolume,
  };
};

export default useDrumMachine;

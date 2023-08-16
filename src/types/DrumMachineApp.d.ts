declare type SoundsType = {
  keyCode: number;
  key: string;
  id: string;
  url: string;
};

declare type SoundsGroupType = SoundsType[];

declare type PlayType = (key: string, tune: string) => void;

export { SoundsGroupType, SoundsType, PlayType };

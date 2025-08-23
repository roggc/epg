export type EPGData = {
  channels: Channel[];
};

export type Channel = {
  id: string;
  title: string;
  images: EPGImage;
  schedules: Schedule[];
};

export type Schedule = {
  id: string;
  title: string;
  start: string;
  end: string;
};

export type EPGImage = {
  id?: string;
  logo: string;
};

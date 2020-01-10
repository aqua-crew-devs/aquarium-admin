export type CreateChannelRequestOnAuto = {
  mode: "auto";
  id: string;
};

export type CreateChannelRequestOnManual = {
  mode: "manual";
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

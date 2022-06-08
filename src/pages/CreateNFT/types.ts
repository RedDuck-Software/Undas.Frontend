export interface CreateNFTForm {
  name: string;
  externalLink: string;
  description: string;
  collection: string;
  supply: string;
  freezeMetadata: string;
}

export type SelectItemType = {
  icon?: string;
  label: string;
};

export type Property = {
  type: string;
  name: string;
};

export type Level = {
  name: string;
  complete: number | string;
};

export type Stat = Level;

export type Complete = string | number;

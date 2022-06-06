export interface CreateNFTForm {
  name: string;
  externalLink: string;
  description: string;
  collection: string;
  properties: Property[];
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

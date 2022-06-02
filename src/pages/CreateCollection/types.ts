export interface CreateSubmitForm {
  logoURI?: string;
  featuredURI?: string;
  bannerURI?: string;
  name: string;
  customURL?: string;
  information?: string;
  category?: string;
  twitter?: string;
  discord?: string;
  instagram?: string;
  yourSite?: string;
  creatorEarnings: string;
  blockchain: string;
  sensetiveStatus: boolean;
}

export type SelectItemType = {
  icon?: string;
  label: string;
};

export interface CreateCollectionForm {
  logoURI?: string;
  logoURL?: string;
  featuredURI?: string;
  featuredURL?: string;
  bannerURI?: string;
  bannerURL?: string;
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
  categoryId?: number;
};

export enum ImageFile {
  logo = "Logo",
  featured = "Featured",
  banner = "Banner",
}

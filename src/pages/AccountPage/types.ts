export type NFT = {
  token_address: string;
  token_id: string;
  contract_type: string;
  owner_of: string;
  block_number: string;
  block_number_minted: string;
  token_uri?: string | undefined;
  metadata?: string | undefined;
  synced_at?: string | undefined;
  amount?: string | undefined;
  name: string;
  symbol: string;
};

export type getNFT = {
  page?: number;
  page_size?: number;
  result?: any;
  status?: string;
  total?: number;
};

export type CreatedItemProps = {
  id: number;
  URI: string;
  name: string;
  tokenOwner?: string;
  collectionName?: string;
  collectionId?: string;
  tokenAddress: string;
};

export type CreatedCollectionItemProps = {
  id: number;
  collectionUrl: string;
  collectionCategory: string;
  collectionInfo?: string;
  collectionName?: string;
  owner?: string;
};

export enum Filter {
  clearAll = "CLEAR_ALL",
  // search by substring
  setSearch = "SET_SEARCH", 
  // status
  addStatus = "ADD_STATUS",
  removeStatus = "REMOVE_STATUS",
  // price
  setPrice = "SET_PRICE",
  // collection
  addCollection = "ADD_COLLECTION",
  removeCollection = "REMOVE_COLLECTION",
  // category
  addCategory = "ADD_CATEGORY",
  removeCategory = "REMOVE_CATEGORY",
  // status toggle
  new = "TOGGLE_NEW",
  staking = "TOGGLE_STAKING",
  buying = "TOGGLE_BUYING",
  hasOffers = "TOGGLE_HAS_OFFERS",
}

export type Status = {
  statusName: string,
}

export type Collection = {
  collectionName: string,
  collectionIcon: string
}

export type Category = {
  categoryName: string,
  categoryIcon: string
}
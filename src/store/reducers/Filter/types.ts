export enum Filter {
   clearAll = "CLEAR_ALL",
   // collection
   addCollection = "ADD_COLLECTION",
   removeCollection = "REMOVE_COLLECTION",
   // category
   addCategory = "ADD_CATEGORY",
   removeCategory = "REMOVE_CATEGORY",
   // status toggle
   staking = "TOGGLE_STAKING",
   buying = "TOGGLE_BUYING",
   hasOffers = "TOGGLE_HAS_OFFERS",
}

export type Collection = {
    collectionName: string,
    collectionIcon: string
}

export type Category = {
    categoryName: string,
    categoryIcon: string
}
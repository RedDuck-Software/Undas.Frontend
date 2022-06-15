export enum Filter {
   addCollection = "ADD_COLLECTION",
   removeCollection = "REMOVE_COLLECTION",
   removeAllCollection = "REMOVE_ALL_COLLECTION"
}

export type Collection = {
    collectionName: string,
    collectionIcon: string
}
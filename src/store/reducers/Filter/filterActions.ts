import { Filter } from "./types";

export function addSelectedCollection(collectionIcon: string, collectionName: string) {
    const action = { type: Filter.addCollection, payload: { collectionIcon, collectionName } };
    return action;
}

export function removeSelectedCollection(collectionName: string | number) {
    return { type: Filter.removeCollection, payload: collectionName };
}

export function removeAllSelectedCollections() {
    return { type: Filter.removeAllCollection };
}
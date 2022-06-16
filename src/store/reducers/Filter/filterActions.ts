import { Filter } from "./types";

export function addSelectedCollection(collectionIcon: string, collectionName: string) {
    const action = { type: Filter.addCollection, payload: { collectionIcon, collectionName } };
    return action;
}

export function removeSelectedCollection(collectionName: string | number) {
    return { type: Filter.removeCollection, payload: collectionName };
}

export function addSelectedCategory(categoryIcon: string, categoryName: string) {
    const action = {type: Filter.addCategory, payload: { categoryIcon, categoryName } };
    return action;
}

export function removeSelectedCategory(categoryName: string | number) {
    return { type: Filter.removeCategory, payload: categoryName };
}

export function clearAll() {
    return { type: Filter.clearAll };
}
import {CreateNFT} from "./types"

let prevId = 0;

export function addProperty(propertyType: string, propertyName: string) {
    const id = prevId + 1;
    const action = {type: CreateNFT.add, id: id, propertyType: propertyType, propertyName: propertyName}
    prevId = id;
    return action;
}

export function removeProperty(propertyId: string | number) {
    return {type: CreateNFT.remove, propertyId};
}
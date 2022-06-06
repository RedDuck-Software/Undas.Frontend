import { Complete } from "../../../pages/CreateNFT/types";
import { CreateNFT } from "./types"

let prevId = 0;

export function addProperty(propertyType: string, propertyName: string) {
    const id = prevId + 1;
    const action = {type: CreateNFT.addProperty, payload: {id: id, type: propertyType, name: propertyName}}
    prevId = id;
    return action;
}

export function removeProperty(propertyId: string | number) {
    return {type: CreateNFT.removeProperty, payload: propertyId};
}

export function editProperty(propertyId: string | number, propertyType: string, propertyName: string) {
    return {type: CreateNFT.editProperty, propertyId, propertyType, propertyName}
}

export function addLevel(levelName: string, levelComplete: Complete) {
    const id = prevId + 1;
    const action = {type: CreateNFT.addLevel, payload: {id: id, name: levelName, complete: levelComplete}}
    prevId = id;
    return action;
}

export function removeLevel(levelId: string | number) {
    return {type: CreateNFT.removeLevel, payload: levelId};
}

export function editLevel(levelId: string | number, levelName: string, levelComplete: Complete) {
    return {type: CreateNFT.editLevel, levelId, levelName, levelComplete}
}

export function addStat(statName: string, statComplete: Complete) {
    const id = prevId + 1;
    const action = {type: CreateNFT.addStat, payload: {id: id, name: statName, complete: statComplete}}
    prevId = id;
    return action;
}

export function removeStat(statId: string | number) {
    return {type: CreateNFT.removeStat, payload: statId};
}

export function editStat(statId: string | number, statName: string, statComplete: Complete) {
    return {type: CreateNFT.editStat, statId, statName, statComplete}
}
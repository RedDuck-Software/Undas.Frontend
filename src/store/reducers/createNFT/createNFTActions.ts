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

export function addLevel(levelName: string, levelComplete: string | number) {
    const id = prevId + 1;
    const action = {type: CreateNFT.addLevel, payload: {id: id, name: levelName, complete: levelComplete}}
    prevId = id;
    return action;
}

export function removeLevel(levelId: string | number) {
    return {type: CreateNFT.removeLevel, payload: levelId};
}

export function editLevel(levelId: string | number, levelName: string, levelComplete: string | number) {
    return {type: CreateNFT.editLevel, levelId, levelName, levelComplete}
}

export function addStat(statType: string, statName: string) {
    const id = prevId + 1;
    const action = {type: CreateNFT.addStat, payload: {id: id, type: statType, name: statName}}
    prevId = id;
    return action;
}

export function removeStat(statId: string | number) {
    return {type: CreateNFT.removeStat, payload: statId};
}

export function editStat(statId: string | number, statType: string, statName: string) {
    return {type: CreateNFT.editStat, statId, statType, statName}
}
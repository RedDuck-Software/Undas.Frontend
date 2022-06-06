export enum CreateNFT {
    // Property
    addProperty = "ADD_PROPERTY",
    removeProperty = "REMOVE_PROPERTY",
    editProperty = "EDIT_PROPERTY",
    // Level
    addLevel = "ADD_LEVEL",
    removeLevel ="REMOVE_LEVEL",
    editLevel = "EDIT_LEVEL",
    // Stat
    addStat= "ADD_STAT",
    removeStat = "REMOVE_STAT",
    editStat = "EDIT_STAT",
}

export type Item = {
    id: string | number,
    type: string,
    name: string
}
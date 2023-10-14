

export type ClassState  = {
    className: string,
    classBool: boolean,
}

export type SetState = {
    setName: string,
    setBool: boolean,
}

export type State = {
    classes: [ClassState],
    sets: [SetState],
    numPacks: number,
    error:string,
    cardsFromBackend: any,
}
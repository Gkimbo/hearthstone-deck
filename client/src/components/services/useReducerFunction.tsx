const reducer = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_CLASS":
            return {
                ...state,
                classes: [...state.classes, action.payload],
            };
        case "REMOVE_CLASS":
            return {
                ...state,
                classes: state.classes.filter((c: string) => c !== action.payload),
            };
        case "ADD_SET":
            return {
                ...state,
                sets: [...state.sets, action.payload],
            };
        case "REMOVE_SET":
            return {
                ...state,
                sets: state.sets.filter((s: string) => s !== action.payload),
            };
        case "UPDATE_PACKS":
            return {
                ...state,
                numPacks: action.payload,
            };
        case "ADD_SETTINGS":
            return {
                ...state,
                ...action.payload,
            };
        default:
            throw new Error();
    }
};

export default reducer;

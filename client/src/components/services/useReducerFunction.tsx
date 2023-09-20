const reducer = (state:any, action:any) => {
    switch (action.type) {
        case "chosenLocation":
            return {
                ...state,
                chosenLocation: action.chosenLocation,
            };
        default:
            throw new Error();
    }
};

export default reducer;
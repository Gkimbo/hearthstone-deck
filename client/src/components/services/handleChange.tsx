const handleChange = (event: any, dispatch: any) => {
    const { name, value, checked } = event.target;

    if (name === "class") {
        if (checked) {
            dispatch({ type: "ADD_CLASS", payload: value });
        } else {
            dispatch({ type: "REMOVE_CLASS", payload: value });
        }
    }

    if (name === "set") {
        if (checked) {
            dispatch({ type: "ADD_SET", payload: value });
        } else {
            dispatch({ type: "REMOVE_SET", payload: value });
        }
    }

    if(name === "decks") {
        dispatch({type: "UPDATE_DECKS", payload: value})
    }
};

export default handleChange;
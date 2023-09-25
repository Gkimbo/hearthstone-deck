const submitUserInput = async (state: any) => {
    try {
        const response = await fetch("http://localhost:8000/api/v1/userInput", {
            method: "POST",
            body: JSON.stringify(state),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        });
        if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
        }
        const responseBody = await response.json();
        return responseBody;
    } catch (error: any) {
        return `getProjects error in Fetch: ${error.message}`;
    }
};

export default submitUserInput;

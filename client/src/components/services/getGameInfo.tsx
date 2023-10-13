import { State } from "../types/Draft";

const getGameInfo = async () => {
    try {
        const response = await fetch("http://localhost:8000/api/v1/info");
        if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
        }
        const responseBody = await response.json();
        interface GameData {
            name: string;
        }
        const gameClasses = responseBody.classes.map((gameClass: GameData) => {
            return {
                className: gameClass,
                classBool: false,
            };
        });

        const gameSets = responseBody.sets.map((gameSet: GameData) => {
            return {
                setName: gameSet,
                setBool: false,
            };
        });

        const newSettings: State = {
            classes: gameClasses,
            sets: gameSets,
            numPacks: 1,
            error: "",
            cardsFromBackend: null,
        };

        return newSettings;
    } catch (error: any) {
        console.error(`getProjects error in Fetch: ${error.message}`);
    }
};

export default getGameInfo;

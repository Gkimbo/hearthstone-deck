import React, { useEffect, useState } from "react";
import Classes from "./DraftSettings/Classes";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    const[allCards, setAllCards] = useState<object>({})

    const gameClasses = Object.keys(allCards);
    console.log(allCards)

    const getGameInfo = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/all");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            setAllCards(responseBody)
        } catch (error: any) {
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getGameInfo()
    }, []);

    return (
        <div className="callout">
            <form>
                <Classes gameClasses={gameClasses} />
            </form>
        </div>
    );
};

export default Draft;

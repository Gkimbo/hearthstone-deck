import React, { useEffect, useState } from "react";
import Classes from "./DraftSettings/Classes";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    const[cardInfo, setCardInfo] = useState<{classes: string[], sets: string[]}>({classes:[], sets:[]})

    const gameClasses = cardInfo.classes.map((eachClass: string) => {
        return eachClass
    })
    const gameSets = cardInfo.sets.map((eachSet:string) => {
        return eachSet
    })

    const getGameInfo = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/info");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            setCardInfo(responseBody)
        } catch (error: any) {
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getGameInfo()
    }, []);

    return (
        <div className="callout">
                <Classes gameClasses={gameClasses} gameSets={gameSets}/>
        </div>
    );
};

export default Draft;

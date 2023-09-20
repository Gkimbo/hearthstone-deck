import React, { useEffect, useState } from "react";
import Classes from "./DraftSettings/Classes";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    interface IDraftSettings {
        gameClasses: Array<object>;
        gameSets: Array<object>;
        numPacks: number;
    }
    const [draftSettings, setDraftSettings] = useState<IDraftSettings>({
        gameClasses: [],
        gameSets: [],
        numPacks: 0,
    });
    // console.log(draftSettings);

    const getGameInfo = async () => {
        try {
            const response = await fetch("http://localhost:8000/api/v1/info");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            // console.log(responseBody);
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
            const newSettings = {
                gameClasses,
                gameSets,
                numPacks: 0,
            };
            setDraftSettings(newSettings);
        } catch (error: any) {
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getGameInfo();
    }, []);

    return (
        <div className="callout">
            <form>
                <Classes draftSettings={draftSettings} setDraftSettings={setDraftSettings} />
            </form>
        </div>
    );
};

export default Draft;

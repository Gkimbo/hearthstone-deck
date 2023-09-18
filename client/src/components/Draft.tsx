import React, { useEffect, useState } from "react";
import Classes from "./DraftSettings/Classes";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
    // useEffect call for classes and sets
    const getGameInfo = async () => {
        try {
            const response = await fetch("/api/v1/cards");
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const responseBody = await response.json();
            console.log(responseBody)
            interface GameClass {
                name: string;
                id: number;
            }
            const gameClasses = responseBody.classes.map((gameClass: GameClass) => {
                return {
                    className: gameClass.name,
                    classId: gameClass.id,
                    classBool: false,
                };
            });
            interface GameSet {
                name: string;
                id: number;
            }
            const gameSets = responseBody.sets.map((gameSet: GameSet) => {
                return {
                    setName: gameSet.name,
                    setId: gameSet.id,
                    setBool: false,
                };
            });
        } catch (error: any) {
            console.log(error)
            console.error(`getProjects error in Fetch: ${error.message}`);
        }
    };

    useEffect(() => {
        getGameInfo();
    }, []);

    const gameClasses: string[] = [
        "Death Knight",
        "Demon Hunter",
        "Druid",
        "Hunter",
        "Mage",
        "Paladin",
        "Priest",
        "Rogue",
        "Shaman",
        "Warlock",
        "Warrior",
    ];
    const [settings, setSettings] = useState({
        classes: [],
        sets: [],
        cardsPerPack: 0,
        numPacks: 0,
    });

    return (
        <div className="callout">
            <form>
                <Classes gameClasses={gameClasses} />
            </form>
        </div>
    );
};

export default Draft;

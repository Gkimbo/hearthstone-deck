import React, { useState } from "react";
import Classes from "./DraftSettings/Classes";

export interface IDraftProps {}

const Draft: React.FunctionComponent<IDraftProps> = (props) => {
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
    const [settings, setSettings] = useState({});

    return (
        <div className="callout">
            <form>
                <Classes gameClasses={gameClasses} />
            </form>
        </div>
    );
};

export default Draft;

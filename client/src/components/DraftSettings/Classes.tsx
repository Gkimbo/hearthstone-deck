import React, { ReactElement } from "react";

export interface IClassesProps {
    draftSettings: {
        gameClasses: Array<object>;
        gameSets: Array<object>;
        numPacks: number;
    };
    setDraftSettings: (object: {
        gameClasses: Array<object>;
        gameSets: Array<object>;
        numPacks: number;
    }) => void;
}

const Classes: React.FunctionComponent<IClassesProps> = (props) => {
    const { draftSettings, setDraftSettings } = props;
    console.log(props);

    const classElements = draftSettings.gameClasses.map((gameClass: any, index: number) => {
        const handleCheckbox = (): void => {
            type Setting = {
                className?: string;
                classBool?: boolean;
            };

            const singleSettingArray = draftSettings.gameClasses.filter((singleGameClass: any) => {
                return singleGameClass.className === gameClass.className;
            });
            console.log(singleSettingArray);
            const singleSetting: Setting = singleSettingArray[0];

            if (singleSetting.classBool) {
                singleSetting.classBool = false;
            } else {
                singleSetting.classBool = true;
            }
            const newArray = draftSettings.gameClasses;
            newArray.splice(index, 1, singleSetting);
            setDraftSettings({
                ...draftSettings,
                gameClasses: newArray,
            });
        };

        return (
            <label htmlFor={gameClass.className}>
                <h3>
                    {gameClass.className}
                    <input
                        id={gameClass.className}
                        type="checkbox"
                        name={gameClass.className}
                        onChange={handleCheckbox}
                        value={gameClass.classBool}
                    />
                </h3>
            </label>
        );
    });

    return <>{classElements}</>;
};

export default Classes;

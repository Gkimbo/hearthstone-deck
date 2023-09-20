import React from "react";

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

    const classElements = draftSettings.gameClasses.map((gameClass: any) => {
        const handleCheckbox = () => {
            type Setting = {
                classBool: boolean
                className: string
            }
            // const singleSetting = draftSettings.gameClasses.filter((singleGameClass: any) => {
            const singleSettingArray = draftSettings.gameClasses.filter((singleGameClass: any) => {
                return singleGameClass.className === gameClass.className;
            });
            const singleSetting = singleSettingArray[0];

            if (singleSetting.classBool)
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
    return <div className="">{classElements}</div>;
};

export default Classes;

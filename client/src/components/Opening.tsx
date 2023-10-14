import React from "react";
import { State } from "./types/Draft";

export interface IDraftProps {
    state: State;
    dispatch: React.Dispatch<any>;
}

const Opening: React.FunctionComponent<IDraftProps> = ({ state, dispatch }) => {
    const cards = state.cardsFromBackend.packs.map((card: any) => {
        if (card.img) {
            return (
                <div key={card.cardId} className="cell small-3">
                    <img src={card.img} alt={card.name} />
                </div>
            );
        } else {
            return (
                <div key={card.cardId} className="cell small-3">
                    {card.name}
                </div>
            );
        }
    });
    return <div className="grid-x">{cards}</div>;
};

export default Opening;

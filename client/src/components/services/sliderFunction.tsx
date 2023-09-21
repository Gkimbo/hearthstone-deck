import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import handleChange from "./handleChange";

type NonLinearSliderProps = {
    dispatch: React.Dispatch<any>;
};

function valueLabelFormat(value: number) {
    const units = ["Pack", "Packs"];
    let unitIndex = 0;
    let scaledValue = value;
    if (scaledValue > 1) {
        unitIndex = 1;
    } else {
        unitIndex = 0;
    }
    return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value: number) {
    return value;
}

const NonLinearSlider: React.FC<NonLinearSliderProps> = ({ dispatch }) => {
    const [value, setValue] = React.useState<number>(1);
    const handleSlider = (event: any, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setValue(newValue);
            handleChange(event, dispatch);
        }
    };

    return (
        <Box sx={{ width: "40%" }} m="0 auto" p="5px">
            <Typography
                variant="h2"
                component="h3"
                id="non-linear-slider"
                gutterBottom
                className="list-title"
            >
                Number of Packs: {valueLabelFormat(calculateValue(value))}
            </Typography>
            <Slider
                value={value}
                min={1}
                step={1}
                max={30}
                name="numPacks"
                scale={calculateValue}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleSlider}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </Box>
    );
};

export default NonLinearSlider;

import { useState, useEffect, useRef } from "react";

import "./styles.css";

export const RangeSlider = ({
    name = '',
    id = '',
    min = 0,
    max = 100,
    initialValue = 0,
    step = 1,
    onChange
}) => {
    const [value, setValue] = useState(initialValue);
    const rangeRef = useRef(null);

    const updateBackground = (val) => {
        const percentage = ((val - min) / (max - min)) * 100;

        rangeRef.current.style.background = `
      linear-gradient(
        to right,
        #1e88e5 ${percentage}%,
        #d3d3d3 ${percentage}%
      )
    `;
    };

    useEffect(() => {
        updateBackground(value);
    }, [value]);

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        onChange?.(e);
    };

    return (
        <input
            name={name}
            id={id}
            ref={rangeRef}
            type="range"
            min={min}
            max={max}
            value={value}
            step={step}
            className="custom-range"
            onChange={handleChange}
        />
    );
}

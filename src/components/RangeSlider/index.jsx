import { useState, useEffect, useRef } from "react";

import "./styles.css";

export const RangeSlider = ({
    name = '',
    id = '',
    min = 0,
    max = 100,
    initialValue = 0,
    value = 0,
    minValue = 0,
    maxValue = 100,
    step = 1,
    onChange,
    isDouble = false
}) => {
    const [val, setVal] = useState(value !== undefined ? value : initialValue);
    const [minVal, setMinVal] = useState(minValue);
    const [maxVal, setMaxVal] = useState(maxValue);
    const rangeRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        if (!isDouble && (value !== undefined && value !== null)) {
            setVal(Number(value));
        }
    }, [value, isDouble]);

    const updateBackground = (v) => {
        const percentage = ((v - min) / (max - min)) * 100;

        if (rangeRef.current) {
            rangeRef.current.style.background = `
      linear-gradient(
        to right,
        #1e88e5 ${percentage}%,
        #d3d3d3 ${percentage}%
      )
    `;
        }
    };

    const updateTrackBackground = (minV, maxV) => {
        if (trackRef.current) {
            const minPercent = ((minV - min) / (max - min)) * 100;
            const maxPercent = ((maxV - min) / (max - min)) * 100;
            trackRef.current.style.background = `linear-gradient(to right, #d3d3d3 0%, #d3d3d3 ${minPercent}%, #1e88e5 ${minPercent}%, #1e88e5 ${maxPercent}%, #d3d3d3 ${maxPercent}%, #d3d3d3 100%)`;
        }
    };

    useEffect(() => {
        if (!isDouble) {
            updateBackground(val);
        } else {
            updateTrackBackground(minVal, maxVal);
        }
    }, [val, minVal, maxVal, isDouble, min, max]);

    useEffect(() => {
        setMinVal(minValue);
        setMaxVal(maxValue);
    }, [minValue, maxValue]);

    const handleChange = (e) => {
        const newValue = Number(e.target.value);
        setVal(newValue);
        onChange?.({ name, value: newValue });
    };

    const handleMinChange = (e) => {
        const newMin = Number(e.target.value);
        if (newMin <= maxVal) {
            setMinVal(newMin);
            onChange?.({ name: `${name}_min`, value: newMin });
        }
    };

    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value);
        if (newMax >= minVal) {
            setMaxVal(newMax);
            onChange?.({ name: `${name}_max`, value: newMax });
        }
    };

    if (isDouble) {
        return (
            <div className="double-range-slider">
                <div className="range-values">
                    <span className="range-value min-value">{minVal}</span>
                    <span className="range-dash">-</span>
                    <span className="range-value max-value">{maxVal}</span>
                </div>
                <div className="range-track-container">
                    <div className="range-track" ref={trackRef} />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        step={step}
                        className="range-input min-range"
                        onChange={handleMinChange}
                    />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        step={step}
                        className="range-input max-range"
                        onChange={handleMaxChange}
                    />
                </div>
            </div>
        );
    }

    return (
        <input
            name={name}
            id={id}
            ref={rangeRef}
            type="range"
            min={min}
            max={max}
            value={val}
            step={step}
            className="custom-range"
            onChange={handleChange}
        />
    );
};

import React from 'react';
import './mainSelect.css';

type SelectType = {
    value: number,
    name: string
}

type PropsMainSelectType = {
    options: SelectType[],
    value: number,
    onChange: Function
}

const MainSelect = ({options, value, onChange}: PropsMainSelectType) => {
    return (
        <select
            className="pagination__select"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            {options.map(option =>
            <option value={option.value} key={option.value}>
                {option.name}
            </option>
            )}
        </select>
    );
};

export default MainSelect;
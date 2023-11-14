// Внесемо зміни до Select
import React from 'react';
import './select.css';

function Select(props) {
    const { options, settings, selectedValue, onSelectChange } = props;
    const { label, id, name } = settings;

    const handleSelectChange = (e) => {
        const selectedOption = e.target.value;
        onSelectChange(selectedOption);
    };

    return (
        <div className="select">
            <label htmlFor={id} id={`select_filter_${name}`} className={`filters__by-${name}`}>
                {label}
            </label>
            <select
                id={id}
                className={`filters__by-${name}`}
                name={name}
                value={selectedValue}
                onChange={handleSelectChange}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.label}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;

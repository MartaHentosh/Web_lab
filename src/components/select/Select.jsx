import React from 'react';
function Select(props) {
    const { options, settings } = props;
    const { label, id, name } = settings;

    return (
        <div className="select">
            <label htmlFor={id} id='select_filter' className={`filters__by-${name}`}>{label}</label>
            <select id={id} className={`filters__by-${name}`} name={name}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Select;
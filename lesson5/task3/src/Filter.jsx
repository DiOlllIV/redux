import React from 'react';

const Filter = ({ filterText, onChange, count }) => {
   
    return (
        <div className="filter">
            <span className="filter__count">
                {count}
            </span>
            <input type="text" 
                className="filter__input" 
                value={filterText} 
                onChange={e => 
                    onChange(e.target.value)}
            />
        </div>
    );
};

export default Filter;
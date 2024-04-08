import React, { useState } from 'react';

const CustomDropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ setSelectedOption] = useState(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

    return (
        <div className="mobile-dropdown">
            <div className="selected-option" onClick={toggleDropdown}>
                {/* {selectedOption ? selectedOption : 'Personalize'} */}
                <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            {isOpen && (
                <ul className="options">
                    {options.map((option, index) => (
                        <li key={index} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
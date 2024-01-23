import React from "react";

type SelectBoxProps = {
    options: string[];
};

const SelectBox: React.FC<SelectBoxProps> = ({ options }) => {
    return (
        <select className="custom-select">
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;

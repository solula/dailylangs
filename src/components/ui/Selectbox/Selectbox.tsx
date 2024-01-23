import React from "react";

type SelectBoxProps = {
    options: string[];
    className?: string;
};

const SelectBox: React.FC<SelectBoxProps> = ({ options, className }) => {
    const makeClassName = className ? className : "custom-select";
    return (
        <select className={makeClassName}>
            {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;

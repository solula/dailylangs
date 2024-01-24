import React, { useState } from "react";

interface RadioButtonProps {
    label: string;
    className: string;
    name: string;
}

const RadioButton: React.FC<RadioButtonProps> = ({
    label,
    className,
    name,
}) => {
    const [checked, setChecked] = useState(false);
    const id = `checkbox-${label.replace(/\s/g, "-").toLowerCase()}`; // генерация уникального id

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={className}>
            <input
                type="radio"
                name={name}
                id={id} // использование уникального id
                checked={checked}
                onChange={handleCheckboxChange}
            />
            <label className="text--normal" htmlFor={id}>
                {label}
            </label>
        </div>
    );
};

export default RadioButton;

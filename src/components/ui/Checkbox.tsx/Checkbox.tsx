import React, { useState } from "react";

interface CheckboxProps {
    label: string;
    className: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, className }) => {
    const [checked, setChecked] = useState(false);
    const id = `checkbox-${label.replace(/\s/g, "-").toLowerCase()}`; // генерация уникального id

    const handleCheckboxChange = () => {
        setChecked(!checked);
    };

    return (
        <div className={className}>
            <input
                type="checkbox"
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

export default Checkbox;

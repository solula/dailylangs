import React from "react";

type CheckboxProps = {
    label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ label }) => {
    return (
        <div className="checkbox-wrapper">
            <label>
                <input type="checkbox" />
                <span>{label}</span>
            </label>
        </div>
    );
};

export default Checkbox;

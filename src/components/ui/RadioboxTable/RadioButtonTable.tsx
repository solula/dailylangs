import React from "react";
import RadioButton from "./RadioButton";

interface RadioTableProps {
    elements: string[];
    className: string;
    groupName: string;
}

const RadioTable: React.FC<RadioTableProps> = ({
    elements,
    className,
    groupName,
}) => {
    return (
        <div>
            {elements.map((element, index) => (
                <RadioButton
                    key={index}
                    label={element}
                    className={className}
                    name={groupName}
                />
            ))}
        </div>
    );
};

export default RadioTable;

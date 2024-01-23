import React from "react";
import Checkbox from "../Checkbox.tsx/Checkbox";

interface CheckboxTableProps {
    elements: string[];
    className: string;
}

const CheckboxTable: React.FC<CheckboxTableProps> = ({
    elements,
    className,
}) => {
    return (
        <div>
            {elements.map((element, index) => (
                <Checkbox key={index} label={element} className={className} />
            ))}
        </div>
    );
};

export default CheckboxTable;

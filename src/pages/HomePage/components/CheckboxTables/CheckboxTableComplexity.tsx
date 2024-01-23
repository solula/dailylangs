import React from "react";
import CheckboxTable from "../../../../components/ui/CheckboxTable/CheckboxTable";

const CheckboxTableComplexity: React.FC = () => {
    return (
        <CheckboxTable
            elements={["Для всех", "Для начинающих", "Продвинутый уровень"]}
            className="checkbox--ellipse"
        />
    );
};

export default CheckboxTableComplexity;

import React from "react";
import RadioButtonTable from "src/components/ui/RadioboxTable/RadioButtonTable";

const CheckboxTableComplexity: React.FC = () => {
    return (
        <RadioButtonTable
            elements={["Для всех", "Для начинающих", "Продвинутый уровень"]}
            className="radiobutton"
            groupName="complexity"
        />
    );
};

export default CheckboxTableComplexity;

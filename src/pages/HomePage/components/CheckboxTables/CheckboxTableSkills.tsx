import React from "react";
import CheckboxTable from "../../../../components/ui/CheckboxTable/CheckboxTable";

const CheckboxTableSkills: React.FC = () => {
    return (
        <CheckboxTable
            elements={[
                "Грамматика",
                "Лексика",
                "Синтаксис",
                "Фонетика",
                "Пунктуация",
            ]}
            className="checkbox"
        />
    );
};

export default CheckboxTableSkills;

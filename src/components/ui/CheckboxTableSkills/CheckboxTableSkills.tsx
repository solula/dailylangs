import React from "react";
import CheckboxTable from "../CheckboxTable.tsx/CheckboxTable";

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
            className="checkbox--square"
        />
    );
};

export default CheckboxTableSkills;

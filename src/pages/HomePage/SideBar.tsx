import { useState } from "react";
import CheckboxTable from "src/components/ui/CheckboxTable/CheckboxTable";
import MultiRangeSlider from "src/components/ui/MultiRangeSlider/multiRangeSlider";
import RadioButtonTable from "src/components/ui/RadioboxTable/RadioButtonTable";
import SelectBox from "src/components/ui/Selectbox/Selectbox";
import useResizeEffect from "src/hooks/useResizeEffect";

const Sidebar = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useResizeEffect(() => {
        setScreenSize(window.innerWidth);
    });

    return screenSize < 1000 ? <SmallSidebar /> : <BigSidebar />;
};

const SmallSidebar = () => {
    return (
        <div className="sidebar--small">
            <div className="sidebar__language-selector highlight highlight--violet">
                <SelectBox
                    options={["ENG", "ES", "RU"]}
                    className="sidebar__language-selector highlight highlight--violet highlight--little"
                />
            </div>
            <img
                className="sidebar__preferences highlight highlight--violet"
                src="./preferences.svg"
            />
        </div>
    );
};

const BigSidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__language-selector highlight highlight--violet">
                <SelectBox
                    options={["ENG", "ES", "RU"]}
                    className="sidebar__language-selector highlight highlight--violet highlight--little"
                />
            </div>
            <div className="sidebar__menu">
                <div className="sidebar__menu__text">Продолжительность</div>
                <div className="sidebar__menu__slider">
                    <MultiRangeSlider
                        min={1}
                        max={6}
                        onChange={({ min, max }) =>
                            console.log(`min = ${min}, max = ${max}`)
                        }
                    />
                </div>
                <div className="sidebar__menu__text">Сложность</div>
                <div className="sidebar__menu__table">
                    <CheckboxTableComplexity />
                </div>
                <div className="sidebar__menu__text">Навыки</div>
                <div className="sidebar__menu__table">
                    <CheckboxTableSkills />
                </div>
                <div className="sidebar__menu__image">
                    <img
                        className="sidebar__menu__image--lines"
                        src="./lines.svg"
                    />
                    <img
                        className="sidebar__menu__image--star"
                        src="./star.svg"
                    />
                </div>
            </div>
        </div>
    );
};

const CheckboxTableComplexity: React.FC = () => {
    return (
        <RadioButtonTable
            elements={["Для всех", "Для начинающих", "Продвинутый уровень"]}
            className="radiobutton"
            groupName="complexity"
        />
    );
};

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

export default Sidebar;

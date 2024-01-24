import MultiRangeSlider from "src/components/ui/MultiRangeSlider/multiRangeSlider";
import SelectBox from "src/components/ui/Selectbox/Selectbox";
import CheckboxTableComplexity from "./components/CheckboxTables/CheckboxTableComplexity";
import CheckboxTableSkills from "./components/CheckboxTables/CheckboxTableSkills";

const Sidebar = () => {
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

export default Sidebar;

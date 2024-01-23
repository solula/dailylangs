import { useNavigate } from "react-router-dom";
import SelectBox from "../ui/Selectbox/Selectbox";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header">
            <img className="header__logo" src="./logo.svg" />
            <nav className="header__menu">
                <nav className="header__menu__text-list">
                    <button className="header__menu__text-list__item header__menu__text-list__item--violet">
                        Курсы
                    </button>
                    <button className="header__menu__text-list__item">
                        Статьи
                    </button>
                    <button className="header__menu__text-list__item">
                        Вопросы
                    </button>
                </nav>
                <nav className="header__menu__icon-list">
                    <img
                        className="header__menu__icon-list__search"
                        src="./search.svg"
                    />
                    <img
                        className="header__menu__icon-list__user-icon"
                        src="./user.svg"
                    />
                    <SelectBox options={["RU", "ENG", "ES"]} />
                </nav>
            </nav>
        </header>
    );
};

export default Header;

import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <nav className="footer__flexbox">
                <nav className="footer__flexbox__menu">
                    <div className="footer__flexbox__menu__item">
                        Политика конфиденциальности
                    </div>
                    <div className="footer__flexbox__menu__item">
                        Условия пользования
                    </div>
                </nav>
                <img className="footer__logo" src="./white-logo.svg" />
            </nav>
            <div className="footer__copyright">
                © DailyLangs | 2023. Все права защищены
            </div>
        </footer>
    );
};

export default Footer;

const Footer = () => {
    return (
        <footer className="footer">
            <nav className="footer__flexbox">
                <nav className="footer__flexbox__menu">
                    <a className="footer__flexbox__menu__item">
                        Политика конфиденциальности
                    </a>
                    <a className="footer__flexbox__menu__item">
                        Условия пользования
                    </a>
                </nav>
                <img className="footer__flexbox__logo" src="./white-logo.svg" />
            </nav>
            <div className="footer__copyright">
                © DailyLangs | 2023. Все права защищены
            </div>
        </footer>
    );
};

export default Footer;

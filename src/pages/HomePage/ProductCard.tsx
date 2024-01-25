import React from "react";
import IconComponent from "../../components/ui/IconPointer/IconPointer";

type ProductCardProps = {
    backgroundImage: string;
    title: string;
    subtitle: string;
    tutor: {
        surname: string;
        image: string;
    };
    price: {
        old: number;
        new: number;
    };
};

const ProductCard: React.FC<ProductCardProps> = ({
    backgroundImage,
    title,
    subtitle,
    tutor,
    price,
}) => {
    const percentage = ((price.old - price.new) / price.old) * 100;
    return (
        <div className="card">
            <img src={backgroundImage} className="card__background-image" />
            <h1 className="card__title">{title}</h1>
            <h1 className="card__subtitle">{subtitle}</h1>
            <span className="card__tutor__surname highlight highlight--green">
                {tutor.surname}
            </span>
            <IconComponent className="card__tutor__image__pointer" />
            <span className="card__price--new">{price.new}₽</span>
            <span className="card__price--sale highlight highlight--pink highlight--little">
                {percentage.toFixed(0)}%
            </span>
            <span className="card__price--old">{price.old}₽</span>
            <img src="english-flag.svg" className="card__flag" />
            <span className="card__read-more">Подробнее</span>
            <img src={tutor.image} className="card__tutor__image" />
        </div>
    );
};

export default ProductCard;

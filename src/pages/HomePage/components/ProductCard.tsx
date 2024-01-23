import React from "react";
import IconComponent from "../../../components/ui/IconPointer/IconPointer";

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
            <text className="card__title">{title}</text>
            <text className="card__subtitle">{subtitle}</text>
            <text className="card__tutor__surname highlight highlight--green">
                {tutor.surname}
            </text>
            <IconComponent className="card__tutor__image__pointer" />
            <text className="card__price--new">{price.new}₽</text>
            <text className="card__price--sale highlight highlight--pink highlight--little">
                {percentage.toFixed(0)}%
            </text>
            <text className="card__price--old">{price.old}₽</text>
            <img src="english-flag.svg" className="card__flag" />
            <text className="card__read-more">Подробнее</text>
            <img src={tutor.image} className="card__tutor__image" />
        </div>
    );
};

export default ProductCard;

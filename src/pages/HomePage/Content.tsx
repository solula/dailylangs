import ProductCard from "./ProductCard";

const Content = () => {
    return (
        <div className="content">
            <div className="content__title">
                <div className="content__title__text">Курсы&nbsp;</div>
                <div className="content__title__text highlight highlight--green">
                    английского языка
                </div>
            </div>
            <div className="content__cards-grid">
                <ContentProductCard
                    subtitle="Базовый уровень"
                    tutor_image="girl1.svg"
                    background_image="A-Z.svg"
                />
                <ContentProductCard
                    subtitle="Вводно-фонетический курс"
                    tutor_image="girl2.svg"
                    background_image="ae.svg"
                />
                <ContentProductCard
                    subtitle="Базовый уровень"
                    tutor_image="girl1.svg"
                    background_image="A-Z.svg"
                />
                <ContentProductCard
                    subtitle="Вводно-фонетический курс"
                    tutor_image="girl2.svg"
                    background_image="ae.svg"
                />
            </div>
        </div>
    );
};

type ContentProductCardProps = {
    tutor_image: string;
    background_image: string;
    subtitle: string;
};

const ContentProductCard: React.FC<ContentProductCardProps> = ({
    tutor_image,
    background_image,
    subtitle,
}) => {
    return (
        <ProductCard
            backgroundImage={background_image}
            title="Английский шаг за шагом:"
            subtitle={subtitle}
            tutor={{
                surname: "Полина Коваленко",
                image: tutor_image,
            }}
            price={{
                old: 6000,
                new: 2940,
            }}
        />
    );
};

export default Content;

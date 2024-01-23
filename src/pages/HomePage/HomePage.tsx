import CheckboxTableComplexity from "src/components/ui/CheckboxTableComplexity/CheckboxTableComplexity";
import CheckboxTableSkills from "src/components/ui/CheckboxTableSkills/CheckboxTableSkills";
import MultiRangeSlider from "src/components/ui/MultiRangeSlider/multiRangeSlider";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
import SelectBox from "src/components/ui/Selectbox/Selectbox";

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
            </div>
        </div>
    );
};

type ContentProductCardProps = {
    tutor_image: string;
};

const ContentProductCard: React.FC<ContentProductCardProps> = ({
    tutor_image,
}) => {
    return (
        <ProductCard
            backgroundImage="A-Z.svg"
            title="Английский шаг за шагом:"
            subtitle="Базовый уровень"
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
                <ContentProductCard tutor_image="girl1.svg" />
                <ContentProductCard tutor_image="girl2.svg" />
                <ContentProductCard tutor_image="girl1.svg" />
                <ContentProductCard tutor_image="girl2.svg" />
            </div>
        </div>
    );
};
export default function HomePage() {
    return (
        <div className="stack stack--row">
            <Sidebar />
            <Content />
        </div>
    );
}

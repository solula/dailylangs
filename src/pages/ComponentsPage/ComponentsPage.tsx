import CheckboxTableComplexity from "src/components/ui/CheckboxTableComplexity/CheckboxTableComplexity";
import CheckboxTableSkills from "src/components/ui/CheckboxTableSkills/CheckboxTableSkills";
import MultiRangeSlider from "src/components/ui/MultiRangeSlider/multiRangeSlider";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
import SelectBox from "src/components/ui/Selectbox/Selectbox";
export default function HomePage() {
    return (
        <div className="filter">
            <MultiRangeSlider
                min={1}
                max={6}
                onChange={({ min, max }) =>
                    console.log(`min = ${min}, max = ${max}`)
                }
            />
            <div className="container">
                <div className="text--title">Курсы&nbsp;</div>
                <div className="text--title highlight highlight--green">
                    английского языка
                </div>
            </div>
            <div className="container">
                <div className="text--new-price highlight highlight--green">
                    2940₽
                </div>
                <div className="text--old-price highlight highlight--green">
                    6000₽
                </div>
            </div>
            <div className="container">
                <div className="text--normal">Вопросы</div>
                <div className="text--surname">Полина Коваленко</div>
                <div className="text--sale-percent highlight highlight--violet">
                    -51%
                </div>
            </div>
            <div className="container">
                <img className="logo" src="./logo.svg" alt="logo" />
            </div>
            <div className="container">
                <CheckboxTableComplexity />
            </div>
            <div className="container">
                <CheckboxTableSkills />
            </div>
            <div className="container">
                <ProductCard
                    backgroundImage="A-Z.svg"
                    title="Английский шаг за шагом:"
                    subtitle="Базовый уровень"
                    tutor={{
                        surname: "Полина Коваленко",
                        image: "girl1.svg",
                    }}
                    price={{
                        old: 6000,
                        new: 2940,
                    }}
                />
                <ProductCard
                    backgroundImage="ae.svg"
                    title="Английский шаг за шагом:"
                    subtitle="Базовый уровень"
                    tutor={{
                        surname: "Полина Коваленко",
                        image: "girl2.svg",
                    }}
                    price={{
                        old: 6000,
                        new: 2940,
                    }}
                />
            </div>
            <div className="container">
                <SelectBox options={["RU", "ENG", "ES"]} />
            </div>
        </div>
    );
}

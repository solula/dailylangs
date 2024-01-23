import MultiRangeSlider from "src/components/ui/MultiRangeSlider/multiRangeSlider";
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
                <div className="text--menu-item">Вопросы</div>
                <div className="text--surname">Полина Коваленко</div>
                <div className="text--sale-percent highlight highlight--violet">
                    -51%
                </div>
            </div>
            <div className="container">
            <img className="logo" src="./logo.svg" alt="logo" />
            </div>
        </div>
    );
}

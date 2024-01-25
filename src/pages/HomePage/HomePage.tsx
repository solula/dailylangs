import { useState } from "react";
import useResizeEffect from "src/hooks/useResizeEffect";
import Content from "./Content";
import Sidebar from "./SideBar";

export default function HomePage() {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useResizeEffect(() => {
        setScreenSize(window.innerWidth);
    });
    return screenSize < 1000 ? <SmallHomePage /> : <BigHomePage />;
}

const BigHomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__image">
                <img className="homepage__image--ellipse" src="./ellipse.svg" />
            </div>
            <div className="homepage__stack">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};

const SmallHomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__stack--mobile">
                <Sidebar />
                <Content />
            </div>
        </div>
    );
};

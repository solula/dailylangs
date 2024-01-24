import Content from "./Content";
import Sidebar from "./SideBar";

export default function HomePage() {
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
}

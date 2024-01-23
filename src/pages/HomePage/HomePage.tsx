import Content from "./Content";
import Sidebar from "./SideBar";

export default function HomePage() {
    return (
        <div className="stack stack--row">
            <Sidebar />
            <Content />
        </div>
    );
}

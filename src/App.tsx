import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "src/components/page/PageLayout";
import "src/scss/styles.scss";
import HomePage from "./pages/HomePage/HomePage";

export default function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}

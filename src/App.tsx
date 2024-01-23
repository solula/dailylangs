import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PageLayout from "src/components/page/PageLayout";
import NotFoundPage from "src/pages/NotFoundPage/NotFoundPage";
import "src/scss/styles.scss";
import ComponentsPage from "./pages/ComponentsPage/ComponentsPage";

export default function App() {
    return (
        <Router>
            <PageLayout>
                <Routes>
                    <Route path="/" element={<ComponentsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </PageLayout>
        </Router>
    );
}

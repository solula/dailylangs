import React from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "grid",
                //gap: 2,
                gridTemplateRows: "auto 1fr auto",
                gridTemplateAreas: `"header"
                               "content"
                               "footer"`,
            }}
        >
            <div style={{ gridArea: "header" }}>
                <Header />
            </div>
            <div style={{ gridArea: "content" }}>{children}</div>
            <div style={{ gridArea: "footer" }}>
                <Footer />
            </div>
        </div>
    );
}

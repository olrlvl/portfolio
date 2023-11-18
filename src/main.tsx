import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Footer/Footer";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Header />
        <App />
        <Footer />
    </React.StrictMode>
);

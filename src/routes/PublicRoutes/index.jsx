import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import PublicFooter from "../../components/PublicFooter";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const PublicRoutes = () => {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen h-screen">
                <Routes>
                    <Route element={<Navigate to="/login" />} path="/*" />
                    <Route element={<LoginPage />} path="/login" />
                    <Route element={<RegisterPage />} path="/register" />
                </Routes>
                <PublicFooter />
            </div>
        </BrowserRouter>
    );
}

export default PublicRoutes;
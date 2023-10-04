import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HomePage from "../../pages/HomePage";
import PrivateFooter from "../../components/PrivateFooter";

const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between min-h-screen ">
        <Navbar />
        <Routes>
          <Route element={<Navigate to="/" />} path="/*" />
          <Route element={<HomePage />} path="/" />
        </Routes>
        <PrivateFooter />
      </div>
    </BrowserRouter>
  );
}

export default PrivateRoutes;
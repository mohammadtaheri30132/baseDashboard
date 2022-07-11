import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import PublicRoutes from "./PublicRoutes";
import Login from "../pages/sign-in/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import TemplateComponents from "../pages/template/TemplateComponents";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ProtectedRoutes />}>
                    <Route path="/" element={<Navigate replace to="dashboard" />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="template" element={<TemplateComponents />} />
                </Route>
                <Route path="login" element={<PublicRoutes />}>
                    <Route path="/login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;

import { Routes, Route } from "react-router-dom";
import { Login } from "../pages/login";
import { DashBorard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { ProtectedRoutes } from "../pages/protectedRoutes";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/DashBoard" element={<ProtectedRoutes />}>
        <Route index element={<DashBorard/>} />
      </Route>
    </Routes>
  );
};

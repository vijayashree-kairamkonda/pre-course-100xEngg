import { Route, Routes } from "react-router-dom";
import { Login } from "./Login";
import { Home } from "./Home";

export const Endpoints = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

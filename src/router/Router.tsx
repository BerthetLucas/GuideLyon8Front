import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "@/page/Home";
import { Profil } from "@/page/Profil";
import { Registration } from "@/page/Registration";
import { Login } from "@/page/Login";
import { Nav } from "@/components/ui/nav";

export const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

import { React } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";
import { Register } from "../Register/Register";
import { Login } from "../Login/Login";
import { AdminPanel } from "../AdminPanel/AdminPanel";
import { Profile } from "../Profile/Profile";
import { ProfileUpdate } from "../ProfileUpdate/ProfileUpdate";
import { ProductDetail } from "../ProductDetail/ProductDetail";
import { ShoppingCartPanel } from "../ShoppingCartPanel/ShoppingCartPanel";

export const Body = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminPanel />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profileupdate" element={<ProfileUpdate />} />
                <Route path="/productdetail" element={<ProductDetail />} />
                <Route path="/shoppingcart" element={<ShoppingCartPanel />} />
            </Routes>
        </>
    );
};

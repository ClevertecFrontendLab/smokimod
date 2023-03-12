import React from "react";
import { Link } from "react-router-dom";

import "./profile-logout.scss";

const removeLocalStorageAuth = () => {
  localStorage.removeItem("auth");
};

export const ProfileLogout = ({ open }) => {
  return (
    <div className={open ? "profile" : "profile disable"}>
      <div className="profile-container">
        <h3> Профиль</h3>
        <Link to="/" onClick={removeLocalStorageAuth}>
          Выход
        </Link>
      </div>
    </div>
  );
};

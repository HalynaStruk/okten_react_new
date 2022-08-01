import React from 'react';
import css from './MainLayout.module.css'
import {Outlet, NavLink} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div className={css.header}>
                <NavLink to="/home">Home</NavLink>
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
                <NavLink to="/about">About</NavLink>
            {/*  Можна використовувати Link або NavLink, різниця в тому,
            що при натискані на NavLink в того посилання зявляється class=active */}
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};
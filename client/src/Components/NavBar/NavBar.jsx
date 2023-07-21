import React from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";
import SearchBar from "../../Components/SearchBar/SearchBar";

const NavBar = () => { 
    return (
        <div>
             <SearchBar />
            <div className={style.mainContainer}>
                <Link className={style.letra} to="/home">
                    HOME
                </Link>
                <Link className={style.letra} to="/form">
                    FORM
                </Link>
                <Link className={style.letra} to="/">
                    EXIT
                </Link>

            </div>
        </div>
    )
}

export default NavBar;
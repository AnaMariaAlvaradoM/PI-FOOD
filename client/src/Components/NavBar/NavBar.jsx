import React from 'react';
import { Link } from 'react-router-dom';
import style from "./NavBar.module.css";
import SearchBar from '../SearchBar/SearchBar';

const NavBar = (onSearch) => { 
    return (
        <div className={style.mainContainer}>
            <Link to="/home">HOME</Link>
            <Link to="/form">FORM</Link>
            <SearchBar onSearch={onSearch} />   
        </div>
    )
}
export default NavBar;
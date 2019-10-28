import React from "react";
import styles from "./index.module.scss";
import {NavLink} from "react-router-dom";
import routes from "../../../../../config/routes";

const Header = () => (
    <div className={styles.header}>
        <div className={styles.header__title}>React Races</div>
        <div className={styles.header__navigation}>
            <NavLink to={routes.users} activeClassName={styles.header__active} className={styles.header__link}>Racers</NavLink>
            <NavLink to='/leagues' activeClassName={styles.header__active} className={styles.header__link}>Leagues</NavLink>
        </div>
    </div>
);

export default Header


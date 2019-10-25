import React from "react";
import Header from "./components/header";
import styles from "./index.module.scss"

interface Props {
    children: any,
    title: string
}

const DefaultPageTemplate = ({children, title}: Props) => (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.box}>
            <div className={styles.title}>{title}</div>
            {children}
        </div>
    </div>
);

export default DefaultPageTemplate

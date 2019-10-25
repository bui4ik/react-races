import React from "react";
import styles from "../../index.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loader = () => (
    <div className={styles.users__loader}>
        <CircularProgress />
    </div>
);

export default Loader

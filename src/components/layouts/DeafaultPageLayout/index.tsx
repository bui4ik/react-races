import React from "react";
import Header from "./components/header";
import styles from "./index.module.scss"
import * as selectors from "../../../store/users/selectors";
import {connect} from "react-redux";
import Loader from "./components/loader";

interface Props {
    children: any,
    title: string,
    isLoading: boolean
}

const DefaultPageLayout = ({children, title, isLoading}: Props) => (
    <div className={styles.wrapper}>
        <Header/>
        <div className={styles.box}>
            <div className={styles.title}>{title}</div>
            {isLoading ? <Loader/> : <div>{children}</div>}
        </div>
    </div>
);


const mapStateToProps = (state: any) => {
    return {
        isLoading: selectors.isLoadingSelector(state),
    }
};

export default connect(
    mapStateToProps,
)(DefaultPageLayout)

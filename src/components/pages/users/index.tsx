import React from "react";
import DefaultPageTemplate from "../../templates/DeafaultPageTemplate";
import styles from "./index.module.scss"
import * as selectors from "../../../store/users/selectors"
import {connect} from "react-redux";
import UsersItem from "./components/usersItem/usersItem";
import Loader from "./components/loader";
import {GET_ALL_USERS_REQUEST} from "../../../store/users/actions";


class Users extends React.Component<any>{

    componentDidMount(): void {
        this.props.getAllUsers()
    }

    render (){
        const { users, isLoading } = this.props;
        return (
            <DefaultPageTemplate title='All racers'>
                <div className={styles.users__list}>
                    { isLoading ? <Loader/> : <UsersItem users={users}/>}
                </div>
            </DefaultPageTemplate>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.allUsersSelector(state),
        isLoading: selectors.loadingUsersSelector(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllUsers: () => dispatch({type: GET_ALL_USERS_REQUEST})
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users)

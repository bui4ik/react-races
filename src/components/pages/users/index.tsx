import React from "react";
import DefaultPageLayout from "../../layouts/DeafaultPageLayout";
import styles from "./index.module.scss"
import * as selectors from "../../../store/users/selectors"
import {connect} from "react-redux";
import UsersItem from "./components/usersItem/usersItem";
import {getAllUsersRequest} from "../../../store/users/actions";
import {NavLink} from "react-router-dom";

class Users extends React.Component<any>{

    componentDidMount(): void {
        if (this.props.users.length === 0) {
            this.props.getAllUsers();
        }
    }

    render (){
        const { users } = this.props;
        return (
            <DefaultPageLayout title='All racers'>
                <div className={styles.users__list}>
                    <NavLink to={`/users/add`} className={styles.users__add}>Add new user</NavLink>
                    <UsersItem users={users}/>
                </div>
            </DefaultPageLayout>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.allUsersSelector(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAllUsers: () => dispatch(getAllUsersRequest())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Users)

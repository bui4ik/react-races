import React from "react";
import {User} from "../../../../../entities/user";
import styles from "../../index.module.scss";
import {NavLink} from "react-router-dom";
import {deleteUserRequest} from "../../../../../store/users/actions";
import {connect} from "react-redux";

const UsersItem = ({users, deleteUser}: any) => (
    <React.Fragment>
        {users ? users.map((user: User) => (
                <div key={user._id} className={styles.users__item}>
                    <div className={styles.users__photo}>
                        <img src={user.photo} alt='user'/>
                    </div>
                    <div className={styles.users__name}>{user.name} {user.surname}</div>
                    <div className={styles.users__email}>{user.email}</div>
                    <div className={styles.users__description}>{user.description}</div>
                    <NavLink to={`/users/${user._id}`}>Details</NavLink>
                    <button onClick={() => deleteUser(user._id)}>delete user</button>
                </div>
            )) :
            <div> No users yet </div>
        }
    </React.Fragment>
);

const mapStateToProps = (state: any) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteUser: (id: string) => dispatch(deleteUserRequest(id))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UsersItem)


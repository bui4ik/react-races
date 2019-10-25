import React from "react";
import {User} from "../../../../../entities/user";
import styles from "../../index.module.scss";
import {NavLink} from "react-router-dom";

interface IProps {
    users: User[]
}

const UsersItem = ({users}: IProps) => (
    <React.Fragment>
        {users ? users.map((user: User) => (
                <div key={user.id} className={styles.users__item}>
                    <div className={styles.users__photo}>
                        <img src={user.photo} alt='user'/>
                    </div>
                    <div className={styles.users__name}>{user.name} {user.surname}</div>
                    <div className={styles.users__email}>{user.email}</div>
                    <div className={styles.users__description}>{user.description}</div>
                    <NavLink to={`/users/${user.id}`}>Details</NavLink>
                </div>
            )) :
            <div> No users yet </div>
        }
    </React.Fragment>
);

export default UsersItem

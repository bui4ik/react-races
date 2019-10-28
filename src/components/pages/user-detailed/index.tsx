import React from "react";
import DefaultPageLayout from "../../layouts/DeafaultPageLayout";
import styles from "./index.module.scss"
import { Form, Input } from '@rocketseat/unform';
import * as selectors from "../../../store/users/selectors";
import {connect} from "react-redux";
import {getUserRequest, updateUserRequest} from "../../../store/users/actions";

class UserDetailed extends React.Component<any>{

    async componentDidMount(): Promise<void> {
        this.props.getUser(this.props.match.params.id)
    }

    handleSubmit = (user: any) => {
        user.id = this.props.match.params.id;
        user.photo = "http://bit.ly/32yRgpH";
        this.props.updateUser(user)
    };

    render() {
        const { name, surname, username, photo, email, description } = this.props.user;
        const initialData = {
            name,
            surname,
            username,
            email,
            description
        };
        return (
            <DefaultPageLayout title='Racer profile'>
                    <div className={styles.user__container}>
                        <div className={styles.user__photo}>
                            <img src={photo} alt='user'/>
                        </div>
                        <Form onSubmit={this.handleSubmit} initialData={initialData}>
                            <Input name="name" />
                            <Input name="surname"/>
                            <Input name="username"/>
                            <Input name="email"/>
                            <Input name="description"/>
                            <button type="submit">Save changes</button>
                        </Form>
                    </div>
            </DefaultPageLayout>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: selectors.detailedUserSelector(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: (id: string) => dispatch(getUserRequest(id)),
        updateUser: (user: any) => dispatch(updateUserRequest(user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserDetailed)

import React from "react";
import DefaultPageLayout from "../../layouts/DeafaultPageLayout";
import {Form, Input} from "@rocketseat/unform";
import * as selectors from "../../../store/users/selectors";
import {createUserRequest} from "../../../store/users/actions";
import {connect} from "react-redux";

class UserAdd extends React.Component<any>{

    handleSubmit = (user: any) => {
        const  result = Object.values(user).some(value => value === '');
        if ( !result ) {
            this.props.createNewUser(user);
        } else {
            console.log('Заполните все поля')
        }

    };

    render() {
        const initialData = {
            photo: 'http://bit.ly/32yRgpH'
        };
        return (
            <DefaultPageLayout title='Add new user'>
                <Form onSubmit={this.handleSubmit} initialData={initialData}>
                    <label> Name
                        <Input name="name" />
                    </label>
                    <label> Surname
                        <Input name="surname"/>
                    </label>
                    <label> Username
                        <Input name="username"/>
                    </label>
                    <label> Password
                        <Input name="password"/>
                    </label>
                    <label> Email
                        <Input name="email"/>
                    </label>
                    <label> Description
                        <Input name="description"/>
                    </label>
                    <label> Photo
                        <Input name="photo" />
                    </label>
                    <button type="submit">Save changes</button>
                </Form>
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
        createNewUser: (user: any) => dispatch(createUserRequest(user))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserAdd)

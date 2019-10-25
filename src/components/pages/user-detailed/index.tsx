import React from "react";
import DefaultPageTemplate from "../../templates/DeafaultPageTemplate";
import {USERS} from "../../../mock/users.mock";
import { RouteComponentProps } from 'react-router';
import styles from "./index.module.scss"
import { Form, Input } from '@rocketseat/unform';
import {User} from "../../../entities/user";
import * as selectors from "../../../store/users/selectors";
import {getUser} from "../../../store/users/thunks";
import {connect} from "react-redux";
import Loader from "../users/components/loader";

interface UrlProps extends RouteComponentProps<any>{
    id: number
}

interface IState{
    user: User
}

class UserDetailed extends React.Component<any>{
    state: IState = {
        user: {}
    };

    async componentDidMount(): Promise<void> {
        this.props.getUser(this.props.match.params.id)
    }

    handleSubmit = ({ name, surname, email, description }: any) => {
        const users = USERS.map(user => user.id === this.state.user.id ? {...user, name, surname, email, description} : user);
        console.log(users)
    };

    render() {
        const { name, surname, photo, email, description } = this.props.user;
        const { isLoading } = this.props;
        const initialData = {
            name,
            surname,
            email,
            description
        };
        return (
            <DefaultPageTemplate title='Racer profile'>
                { isLoading ? <Loader/>
                :
                    <div className={styles.user__container}>
                        <div className={styles.user__photo}>
                            <img src={photo} alt='user'/>
                        </div>
                        <Form onSubmit={this.handleSubmit} initialData={initialData}>
                            <Input name="name" />
                            <Input name="surname"/>
                            <Input name="email"/>
                            <Input name="description"/>
                            <button type="submit">Save changes</button>
                        </Form>
                    </div>
                }
            </DefaultPageTemplate>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        users: selectors.allUsersSelector(state),
        user: selectors.detailedUserSelector(state),
        isLoading: selectors.isUserLoadingSelector(state),
    }
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getUser: (userId: string) => dispatch(getUser(userId))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(UserDetailed)

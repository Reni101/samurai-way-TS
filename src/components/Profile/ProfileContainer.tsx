import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileThunkCreator, ProfileType} from "../../Redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {AppRootStateType} from "../../Redux/Redux-store";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth:boolean
}

type MapDispatchToPropsType = {
    getProfileThunk: (userid: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & MapStateToPropsType & MapDispatchToPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userid = this.props.match.params.userId;
        if (!userid) userid = '24522';

        this.props.getProfileThunk(userid)
    }

    render() {

        if(!this.props.isAuth) return <Redirect to={'/login'} />
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile!}/>
            </div>

        );
    }

}

let mapStateToProps = (state: AppRootStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, {
    getProfileThunk: getProfileThunkCreator,
})(WithUrlDataContainerComponent);
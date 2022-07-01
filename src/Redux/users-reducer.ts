import {ActionsTypes, FollowActionType, Set_usersActionType, StateTypeUsers, UnfollowActionType} from "./Store";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET USERS"



let initialState: StateTypeUsers = {
    users: [       ],
    pageSize: 5,
    totalUsersCount:0,
}

export type UserType = {
    id: string,
    photoURL:string,
    followed: boolean,
    name: string,
    status: string,
    location: { city: string, country: string }
    photos:any
}


const UsersReducer = (state: StateTypeUsers = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((el) => el.id === action.userID ? {...el, followed: false} : el)
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map((el) => el.id === action.userID ? {...el, followed: true} : el)
            }
        }
        case SET_USERS: {
            return {...state,users:[...state.users, ...action.users]}
        }
        default:
            return state

    }
};

export const followAc = (userID:string):FollowActionType => ({type: FOLLOW, userID})
export const unFollowAc = (userID:string):UnfollowActionType => ({type: UNFOLLOW, userID})
export const setUsersAc = (users:Array<UserType>):Set_usersActionType => ({type: SET_USERS, users})


export default UsersReducer;

import { UserState } from "../../types"
import { ERROR_FETCHING_USER, START_FETCHING_USER, SUCCESS_FETCHING_USER } from "./constants"

export type User = {
    id: number,
    name: string, 
    login: string,
    avatar_url: string,
    html_url: string,
    blog: string,
    location: string,
    bio: string,
    twitter_username: string | null,
    followers: number,
    following: number,
} 
type StatusType = {
    [key: string]: string,
}
type ActionType = {
    type: string,
    payload: User | string
}

export const statusList: StatusType = {
    idle: 'idle',
    process: 'process',
    error: 'error',
    success: 'success'
}
const initialState: UserState = {
    userData: {} as User,
    userStatus: statusList.idle,
    userError: null
}

const userReducer = (state=initialState, {type, payload}: ActionType) => {
    switch (type) {
        case START_FETCHING_USER:
            return { ...state, userStatus: statusList.process, userError: null }
        case ERROR_FETCHING_USER:
            return { ...state, userStatus: statusList.error, userError: payload, userData: {} }
        case SUCCESS_FETCHING_USER:
            return { ...state, userStatus: statusList.success, userError: null, userData: payload }
        default:
            return state;
    }
}

export default userReducer
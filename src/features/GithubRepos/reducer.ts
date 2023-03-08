import { ReposState } from "../../types"
import { ERROR_FETCHING_REPOS, RESET_REPOS, START_FETCHING_REPOS, SUCCESS_FETCHING_REPOS } from "./constants"

export type Data = {
    name: string,  // repo name
    owner: {
        avatar_url: string,
        login: string, //owner name
    },
    html_url: string,
    description: string,
    stargazers_count: number,
    language: string | null,
    forks_count: number,
    visibility: string,
    id: number,
    node_id: string,
} 
type StatusType = {
    [key: string]: string,
}
type ActionType = {
    type: string,
    payload: [] | Data[] | string
}

export const statusList: StatusType = {
    idle: 'idle',
    process: 'process',
    error: 'error',
    success: 'success'
}
const initialState: ReposState = {
    reposData: [],
    reposStatus: statusList.idle,
    reposError: null
}

const reposReducer = (state=initialState, action: ActionType) => {
    switch (action.type) {
        case START_FETCHING_REPOS:
            return { ...state, reposStatus: statusList.process, reposError: null }
        case ERROR_FETCHING_REPOS:
            return { ...state, reposStatus: statusList.error, reposError: action.payload, reposData: [] }
        case SUCCESS_FETCHING_REPOS:
            return { ...state, reposStatus: statusList.success, reposError: null, reposData: [...action.payload] }
        case RESET_REPOS:
            return { ...state, ...initialState }
        default:
            return state;
    }
}

export default reposReducer
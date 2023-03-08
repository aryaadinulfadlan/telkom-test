import { ERROR_FETCHING_USER, START_FETCHING_USER, SUCCESS_FETCHING_USER } from "./constants"
import { User } from "./reducer"

export const startFetchingUser = () => ({ type: START_FETCHING_USER })
export const errorFetchingUser = (payload: string) => ({ type: ERROR_FETCHING_USER, payload })
export const successFetchingUser = (payload: User) => ({ type: SUCCESS_FETCHING_USER, payload })
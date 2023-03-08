import { START_FETCHING_REPOS, ERROR_FETCHING_REPOS, SUCCESS_FETCHING_REPOS, RESET_REPOS } from "./constants";
import { Data } from "./reducer";

export const startFetchingRepos = () => ({ type: START_FETCHING_REPOS })
export const errorFetchingRepos = (payload: string) => ({ type: ERROR_FETCHING_REPOS, payload })
export const successFetchingRepos = (payload: Data[]) => ({ type: SUCCESS_FETCHING_REPOS, payload })
export const resetRepos = () => ({ type: RESET_REPOS })
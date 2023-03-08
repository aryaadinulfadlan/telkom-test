import { Data } from "./features/GithubRepos/reducer"
import { User } from "./features/GithubUser/reducer"
import store from "./features/store"

export type RootState = ReturnType<typeof store.getState>

export type ReposState = {
    reposData: [] | Data[],
    reposStatus: string,
    reposError: null | string
} 
export type UserState = {
    userData: User, 
    userStatus: string, 
    userError: string | null
}
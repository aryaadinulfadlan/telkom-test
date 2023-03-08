import axiosClient from "./axiosClient"

export const getRepos = (username: string, pageNumber: number) => {
    const url = `${username}/repos?page=${pageNumber}&per_page=9`
    return axiosClient.get(url);
}

export const getUser = (username: string) => {
    const url = `${username}`
    return axiosClient.get(url)
}
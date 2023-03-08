import axios from 'axios'
import config from '../config'

const axiosClient = axios.create({
    baseURL: config.baseApiUrl,
    headers: {
        'Content-Type': 'application/json'
    },
})

export default axiosClient
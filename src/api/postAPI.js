import { API_END_POINT } from '../constants/api'
import axios from 'axios'
const token = localStorage.getItem('authenticationToken')
const intance = axios.create({
    baseURL: API_END_POINT,
    headers: {
        Authorization : `Token ${token}`
    }
})

export const fetchPostsAPI = () => {
    return intance.get('/posts')
}
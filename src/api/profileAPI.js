import { API_END_POINT } from '../constants/api'
import axios from 'axios'
const token = localStorage.getItem('authenticationToken')
const intance = axios.create({
    baseURL: API_END_POINT,
    headers: {
        Authorization : `Token ${token}`
    }
})

export const getUserPublicProfileAPI = username => {
    return intance.get(`/users/${username}/public_profile`)
}
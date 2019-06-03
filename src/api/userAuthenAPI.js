import axios from 'axios'
import { API_END_POINT } from '../constants/api'
const intance = axios.create({
    baseURL: API_END_POINT,
    headers : {
        'Content-Type': 'application/json',
    },
    responseType: 'json',
})

export const signUp = user => {
    return intance.post('/users/signup', user)
                  .then(response => response)
                  .catch(error => Object.assign({}, error))
}

export const signIn = user => {
    return intance.post('/users/signin', user)
                   .then(response => response)
                   .catch(error => Object.assign({}, error))
}
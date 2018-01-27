import {SET_USER, UNSET_USER, IS_ADMIN} from '../types'
import axios from 'axios'

export const setUser = (user) => {
    return {
        type: SET_USER,
        user:user
    }
}
export const unSetUser = (user) => {
    return {
        type: UNSET_USER,
    }
}

export const isAdmin = (user) => {
    return {
        type: IS_ADMIN,
        isAdmin: user.isAdmin
    }
}

export const login = (credentials) => (
    (dispatch) => axios.post('/api/v1/users/login',{credentials} )
    .then(res => {
        const user = res.data.user;
        localStorage.userJWT = user.token;
        dispatch(setUser(user))
    })
)

export const signup = (data) => (
    (dispatch) => axios.post('/api/v1/users/signup', {data})
    .then(res => {
        const user = res.data.user;
        localStorage.userJWT = user.token;
        dispatch(setUser(user))
    })
)

export const logout = () => (
    dispatch => {
        localStorage.removeItem('userJWT');
        dispatch(unSetUser())
    }
)

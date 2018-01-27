import {SET_USER, UNSET_USER, IS_ADMIN} from '../types'

export default (state=[], action=[]) => {
    switch (action.type) {
        case SET_USER:
            return action.user;
        case UNSET_USER:
            return {};
        case IS_ADMIN: 
            return action.isAdmin
        default: return state
    }
}
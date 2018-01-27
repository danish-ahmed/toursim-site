import { combineReducers } from "redux";
import properties from './properties';
import user from './user'
import activity from './activity'

export default combineReducers({properties, user, activity })
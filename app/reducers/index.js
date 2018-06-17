import { combineReducers } from 'redux'
import userinfo from './userinfo'
import stores from './stores'
export default combineReducers({
    userinfo,
    stores
})
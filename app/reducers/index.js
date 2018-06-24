import { combineReducers } from 'redux'
import userinfo from './userinfo'
import stores from './stores'
import home from './home'


export default combineReducers({
    userinfo,
    stores,
    home
})
import * as actionTypes from '../constants/stores'

const initialState = []

export default function stores (state = initialState, action){
    switch (action.type){
        case actionTypes.STORE_UPDATE:
            return action.data
        case actionTypes.STORE_ADD:
            state.unshift(action.data)
            return state
        case actionTypes.STORE_RM:
            console.log(state)
            return state.filter(item => {
                if(item.id !== action.data.id){
                    return item
                }
            })
        default:
            //这块一定要返回state 否则报一下错误
            //Reducer "stores" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.
            return state
    }
}
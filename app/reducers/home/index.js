import * as actionTypes from "../../constants/home";

const initialState = {}

export default function home (state = initialState, action) {
    switch (action.type) {
        case actionTypes.UPDATE_HOME_AD_DATA:
            return action.data
        default:
            return state
    }
}
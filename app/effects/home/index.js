import {call, put} from 'redux-saga/effects'
import {UPDATE_HOME_AD_DATA} from  '../../constants/home'
import axios from 'axios'

export function* getHomeAdData() {

    let data = yield call(axios.get,'/api/homead')
    data = data.data
    let dataArr = []
    if(data.length) {
        //随机取三个
        let indexArr= []
        while(dataArr.length < 3 ){
            var index = Math.floor((Math.random() * data.length));
            if(indexArr.indexOf(index) < 0){
                dataArr.push(data[index])
                indexArr.push(index)
            }else{
                continue
            }
        }
    }
    yield put({type:UPDATE_HOME_AD_DATA, data: dataArr})
}
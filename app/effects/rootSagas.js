
import { takeEvery } from 'redux-saga'
import { getHomeAdData } from './home'

export default function* rootSaga () {
    // 就在这个rootSaga里面利用takeLatest去监听action的type
    yield takeEvery('HOME_AD_DATA', getHomeAdData);
}
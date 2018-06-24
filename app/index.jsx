import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { hashHistory } from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import './static/css/common.less'
import './static/css/font.css'
import createSagaMiddleware from 'redux-saga'
import RouteMap from './router/routeMap'
import  rootSaga  from './effects/rootSagas'
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [ sagaMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);


render(
    <Provider store={store}>
        <RouteMap history={hashHistory}/>
    </Provider>,
    document.getElementById('root')
)

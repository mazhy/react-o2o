import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Home from '../containers/Home'
import LocalStore from '../util/localStore'
import {CITYNAME} from '../config/localStoreKey'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userInfoActionsFormOtherFile from '../actions/userinfo'


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }
    }
    render() {
        return (
            <div>
                <Home/>
                {/*这个文件相当于所有文件的父组件,然后根据路由配置规则 渲染子组件*/}

                {
                    this.state.initDone
                    ? this.props.children
                    : <div>loading ...</div>
                }
            </div>
        )
    }

    componentDidMount(){

        let cityName = LocalStore.getItem(CITYNAME)
        if(cityName == null) {
            cityName = '北京'
        }

        this.props.userInfoActions.update({
            cityName
        })

    }
}

function mapStateToProps( state ) {
    return {}
}


function mapDispatchToProps( dispatch ) {
    return {
        userInfoActions : bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)

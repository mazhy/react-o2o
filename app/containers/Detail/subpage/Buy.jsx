import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore'
import { connect } from 'react-redux'
import {hashHistory} from 'react-router'
import { bindActionCreators } from 'redux'
import * as storeActionsFromFile from '../../../actions/stores'


class Buy extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            isStore : false
        }
    }



    render() {
        return (
            <div>
                <BuyAndStore isStore={this.state.isStore}
                             buyHandle={this.buyHandle.bind(this)}
                             storeHandle={this.storeHandle.bind(this)}/>

            </div>
        )
    }

    componentDidMount(){
        this.checkStoreState()
    }

    checkStoreState(){
        const id = this.props.id
        const store = this.props.stores

        store.some(item => {
            if(item.id === id){
                this.setState({
                    isStore: true
                })
            }
            return true
        })

    }

    buyHandle(){
        //购买
        const checkFlag = this.loginCheck()
        if(!checkFlag){
            return
        }


        hashHistory.push('/User')
    }


    storeHandle(){
        //收藏
        const checkFlag = this.loginCheck()
        if(!checkFlag){
            return
        }

        const id = this.props.id
        const storeActions = this.props.storeActions
        if(this.state.isStore){
            //为true 就是要执行取消收藏
            storeActions.rm({id:id})
        }else{
            storeActions.add({id:id})
        }

        this.setState({
            isStore : !this.state.isStore
        })
    }

    //验证登录
    loginCheck(){
        let userinfo = this.props.userinfo
        const id = this.props.id
        if(!userinfo.username){
            // return false
            hashHistory.push('/Login/'+encodeURIComponent('detail/' + id))
            return false
        }
        return true;
    }
}

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo,
        stores: state.stores
    }
}

function mapDispatchToProps(dispatch){
    return {
        storeActions : bindActionCreators(storeActionsFromFile,dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buy)
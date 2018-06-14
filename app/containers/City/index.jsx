import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header'
import CurrentCity from  '../../components/CurrentCity'
import CityList from '../../components/CityList'
import {connect} from 'react-redux'
import * as userInfoActionsFormOtherFile from "../../actions/userinfo";
import { bindActionCreators } from 'redux'
import LocalStore from '../../util/localStore'
import {CITYNAME} from '../../config/localStoreKey'
import {hashHistory} from 'react-router'



class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title='选择城市'></Header>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList changeCityFn={this.changeCity.bind(this)}/>
            </div>
        )
    }

    changeCity(newCity){
        if(newCity == null){
            return
        }
        //修改store
        let userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        //修改localStore
        LocalStore.setItem(CITYNAME,newCity)
        //调准到首页
        hashHistory.push('/')

    }

}

function mapStateToProps(state){
    return {
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions : bindActionCreators(userInfoActionsFormOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)

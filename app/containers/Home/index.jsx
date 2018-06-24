import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import {connect} from 'react-redux'
import HomeAd from './subPage/Ad'
import List from './subPage/List'
import {HOME_AD_DATA } from '../../constants/home'
import {bindActionCreators} from 'redux'
import {getHomeAdData} from '../../actions/home'


class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }


    render() {

        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Category/>
                <div style={{height:'15px', width:'100%'}}></div>
                <HomeAd data={this.props.home}/>
                <List cityName={this.props.userinfo.cityName}/>
            </div>
        )
    }

    componentDidMount(){
        this.props.getHome()
    }
}

function mapStateToProps(state){
    return {
        userinfo : state.userinfo,
        home : state.home
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getHome: bindActionCreators(getHomeAdData, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)

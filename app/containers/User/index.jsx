import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import Header from '../../components/Header'
import UserInfo from  '../../components/UserInfo'
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <Header title="用户中心" backRouter="/"/>
                <UserInfo username={this.props.userinfo.username} city={this.props.userinfo.cityName}/>
                <OrderList username={this.props.userinfo.username}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        userinfo : state.userinfo
    }
}

function mapDispatchToProps(dispatch){
    return {

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)
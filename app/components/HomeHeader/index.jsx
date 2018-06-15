import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import './style.less'
import SearchInput from "../SearchInput";
import { hashHistory } from 'react-router'

class HomeHeader extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-header" className="clear-fix">
                <div className="home-header-left float-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>&nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-right float-right">
                    {/*画一个个人图标*/}
                    <div className="selfOutline"></div>
                    {/*<i className="icon-user"></i>*/}
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <SearchInput value="" keyUpFn={this.keyUpFn.bind(this)} />
                    </div>
                </div>
            </div>
        )
    }

    keyUpFn(value){
        hashHistory.push('/search/all/'+encodeURIComponent(value))
    }
}

export default HomeHeader
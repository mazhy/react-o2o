import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import arrow from './arrow.png'
import './style.less'

class HomeAd extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div id="home-ad">
                {/*<h2 className="ad-title">超值特惠</h2>*/}
                <div className="clear-fix ad-table">
                    <div className="ad-title float-left">超值特惠</div>
                    <div className="float-right ad-title-more">更多优惠
                        <img src={arrow} alt="" style={{width: 5,marginLeft:4}}/>
                    </div>
                </div>
                <div className="ad-container clear-fix">
                    {this.props.data.map((item, index) => {
                        return (
                            <div key={index} className="ad-item float-left">
                                <a href='www.baidu.com' target="_blank">
                                    <div className="ad-item-div">
                                        <img className="ad-item-img" src={item.img} alt=""/>
                                    </div>
                                    <div className="ad-item-title">{item.title}</div>
                                    <div className="price">
                                        <ins className="price_current">{item.price_current}</ins>
                                        <del className="price_old">{item.price_old}</del>
                                    </div>
                                </a>
                            </div>
                            )
                    })}
                </div>
            </div>
        )
    }
}

export default HomeAd
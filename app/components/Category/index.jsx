import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router'
import './style.less'
import meishi from '../../static/icon/meishi.png'
import maoyandianying from '../../static/icon/maoyan.png'
import jiudian from '../../static/icon/jiudian.png'
import xiuxianyule from '../../static/icon/xiuxianyule.png'
import waimai from '../../static/icon/waimai.png'
import huoguo from '../../static/icon/huoguo.png'
import liren from '../../static/icon/liren.png'
import gouwu from '../../static/icon/gouwu.png'
import zhoubianyou from '../../static/icon/zhoubianyou.png'
import ktv from '../../static/icon/ktv.png'

import hunshasheying from '../../static/icon/hunshasheying.png'
import shenghuofuwu from '../../static/icon/shenghuofuwu.png'
import jingdian from '../../static/icon/jingdian.png'
import aiche from '../../static/icon/aiche.png'
import yundongjianshen from '../../static/icon/yundongjianshen.png'
import qinzi from '../../static/icon/qinzi.png'
import jiazhuang from '../../static/icon/jiazhuang.png'
import xuexipeixun from '../../static/icon/xuexipeixun.png'
import yiliaojiankang from '../../static/icon/yiliaojiankang.png'
import daojia from '../../static/icon/daojia.png'

import xiaochikuaican from '../../static/icon/xiaochikuaican.png'
import zizhucan from '../../static/icon/zizhucan.png'
import ribencai from '../../static/icon/ribencai.png'
import meifa from '../../static/icon/meifa.png'
import meijiameijie from '../../static/icon/meijiameijie.png'
import meirongspa from '../../static/icon/meirongspa.png'
import shoushenxianti from '../../static/icon/shoushenxianti.png'
import qinzisheying from '../../static/icon/qinzisheying.png'
import qinziyoule from '../../static/icon/qinziyoule.png'
import quanbufenlei from '../../static/icon/quanbufenlei.png'

class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index : 0,
        }
    }
    render() {
        let opt = {
            auto: 2000,
            callback: function(index) {
                this.setState({index})
            }.bind(this)
        }
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/meishi">
                                <li className="float-left">
                                    <img src={meishi} alt="" width="44px"/>
                                    <p>美食</p>
                                </li>
                            </Link>
                            <Link to="/search/maoyandianying">
                                <li className="float-left">
                                    <img src={maoyandianying} alt="" width="44px"/>
                                    <p>猫眼电影</p>
                                </li>
                            </Link>
                            <Link to="/search/jiudian">
                                <li className="float-left ">
                                    <img src={jiudian} alt="" width="44px"/>
                                    <p>酒店</p>
                                </li>
                            </Link>
                            <Link to="/search/xiuxianyule">
                                <li className="float-left ">
                                    <img src={xiuxianyule} alt="" width="44px"/>
                                    <p>休闲娱乐</p>
                                </li>
                            </Link>
                            <Link to="/search/waimai">
                                <li className="float-left ">
                                    <img src={waimai} alt="" width="44px"/>
                                    <p>外卖</p>
                                </li>
                            </Link>
                            <Link to="/search/huoguo">
                                <li className="float-left ">
                                    <img src={huoguo} alt="" width="44px"/>
                                    <p>火锅</p>
                                </li>
                            </Link>
                            <Link to="/search/liren">
                                <li className="float-left ">
                                    <img src={liren} alt="" width="44px"/>
                                    <p>丽人</p>
                                </li>
                            </Link>
                            <Link to="/search/gouwu">
                                <li className="float-left ">
                                    <img src={gouwu} alt="" width="44px"/>
                                    <p>购物</p>
                                </li>
                            </Link>
                            <Link to="/search/zhoubianyou">
                                <li className="float-left ">
                                    <img src={zhoubianyou} alt="" width="44px"/>
                                    <p>周边游</p>
                                </li>
                            </Link>
                            <Link to="/search/ktv">
                                <li className="float-left ">
                                    <img src={ktv} alt="" width="44px"/>
                                    <p>KTV</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/hunshasheying">
                                <li className="float-left ">
                                    <img src={hunshasheying} alt="" width="44px"/>
                                    <p>婚纱摄影</p>
                                </li>
                            </Link>
                            <Link to="/search/shenghuofuwu">
                                <li className="float-left ">
                                    <img src={shenghuofuwu} alt="" width="44px"/>
                                    <p>生活服务</p>
                                </li>
                            </Link>
                            <Link to="/search/jingdian">
                                <li className="float-left ">
                                    <img src={jingdian} alt="" width="44px"/>
                                    <p>景点</p>
                                </li>
                            </Link>
                            <Link to="/search/aiche">
                                <li className="float-left ">
                                    <img src={aiche} alt="" width="44px"/>
                                    <p>爱车</p>
                                </li>
                            </Link>
                            <Link to="/search/yundongjianshen">
                                <li className="float-left ">
                                    <img src={yundongjianshen} alt="" width="44px"/>
                                    <p>运动健身</p>
                                </li>
                            </Link>
                            <Link to="/search/qinzi">
                                <li className="float-left ">
                                    <img src={qinzi} alt="" width="44px"/>
                                    <p>亲子</p>
                                </li>
                            </Link>
                            <Link to="/search/jiazhuang">
                                <li className="float-left ">
                                    <img src={jiazhuang} alt="" width="44px"/>
                                    <p>家装</p>
                                </li>
                            </Link>
                            <Link to="/search/xuexipeixun">
                                <li className="float-left ">
                                    <img src={xuexipeixun} alt="" width="44px"/>
                                    <p>学习培训</p>
                                </li>
                            </Link>
                            <Link to="/search/yiliaojiankang">
                                <li className="float-left ">
                                    <img src={yiliaojiankang} alt="" width="44px"/>
                                    <p>医疗健康</p>
                                </li>
                            </Link>
                            <Link to="/search/daojia">
                                <li className="float-left ">
                                    <img src={daojia} alt="" width="44px"/>
                                    <p>到家</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            <Link to="/search/xiaochikuaican">
                                <li className="float-left ">
                                    <img src={xiaochikuaican} alt="" width="44px"/>
                                    <p>小吃快餐</p>
                                </li>
                            </Link>
                            <Link to="/search/zizhucan">
                                <li className="float-left ">
                                    <img src={zizhucan} alt="" width="44px"/>
                                    <p>自助餐</p>
                                </li>
                            </Link>
                            <Link to="/search/ribencai">
                                <li className="float-left ">
                                    <img src={ribencai} alt="" width="44px"/>
                                    <p>日本菜</p>
                                </li>
                            </Link>
                            <Link to="/search/meifa">
                                <li className="float-left ">
                                    <img src={meifa} alt="" width="44px"/>
                                    <p>美发</p>
                                </li>
                            </Link>
                            <Link to="/search/meijiameijie">
                                <li className="float-left ">
                                    <img src={meijiameijie} alt="" width="44px"/>
                                    <p>美甲美睫</p>
                                </li>
                            </Link>
                            <Link to="/search/meirongspa">
                                <li className="float-left ">
                                    <img src={meirongspa} alt="" width="44px"/>
                                    <p>美容SPA</p>
                                </li>
                            </Link>
                            <Link to="/search/shoushenxianti">
                                <li className="float-left ">
                                    <img src={shoushenxianti} alt="" width="44px"/>
                                    <p>瘦身纤体</p>
                                </li>
                            </Link>
                            <Link to="/search/qinzisheying">
                                <li className="float-left ">
                                    <img src={qinzisheying} alt="" width="44px"/>
                                    <p>亲子摄影</p>
                                </li>
                            </Link>
                            <Link to="/search/qinziyoule">
                                <li className="float-left ">
                                    <img src={qinziyoule} alt="" width="44px"/>
                                    <p>亲子游乐</p>
                                </li>
                            </Link>
                            <Link to="/search/quanbufenlei">
                                <li className="float-left ">
                                    <img src={quanbufenlei} alt="" width="44px"/>
                                    <p>全部分类</p>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <div className="index-container">
                    <ul>
                        <li className={this.state.index === 0 ? 'selected' : '' }></li>
                        <li className={this.state.index === 1 ? 'selected' : '' }></li>
                        <li className={this.state.index === 2 ? 'selected' : '' }></li>
                    </ul>
                </div>
            </div>

        )
    }
}

export default Category
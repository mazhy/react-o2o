import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getHotCity, getCityList} from '../../fetch/city/city'
import './style.less'

class CityList extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            hotCity: [],
            cityList: [],
            letters: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','W','X','Y','Z']
        }
    }

    componentWillMount() {
        //获取热门城市
        let result = getHotCity()
        result.then(res => {
            let data = res.json()
            return data
        }).then(json => {
            this.setState({
                hotCity: json.data
            })
        })

        //获取所有城市
        let cityList = getCityList()
        cityList.then(res => {
            let data = res.json()
            return data
        }).then(json =>{
            this.setState({
                cityList: json.data
            })
        })
    }

    render() {
        const hotCity = this.state.hotCity
        return (
            <div>
                <div className="city-list-container">
                    <h3>热门城市</h3>
                    <ul className="clear-fix">
                        {
                            hotCity.map((item,index) => {
                                let cityName = item.cityName
                                return (
                                    <li key={index}>
                                        <span value={item.cityName} onClick={this.clickHandle.bind(this,`${cityName}`)}>{item.cityName}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="citys">
                    <div className="hot-trade modebox">
                        <div className="hd">更多城市</div>
                        <div className="home-place-list letter-list">
                            <ul>
                                {this.state.letters.map((item,index)=>{
                                    return (
                                        <li key={index}>
                                            <a onClick={()=>this._handlerClickScroll({item})}>{item}</a>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                    {
                        this.state.cityList.map((item,index) => {
                            const citys = item.list
                            return (
                                <div id={`${item.initial}`} className="hot-trade modebox" key={index}>
                                    <div className="hd">{item.initial}</div>
                                    <div className="home-place-list">
                                        <ul className="citylist">
                                            {citys.map((ele,index) => {
                                                return (
                                                    <li key={index}>
                                                        <a onClick={this.clickHandle.bind(this,`${ele.name}`)}>{ele.name}</a>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }

    clickHandle(cityName){
        this.props.changeCityFn(cityName)
    }


    _handlerClickScroll(id){
        if (id) {
            // 找到锚点
            let anchorElement = document.getElementById(id.item);
            // 如果对应id的锚点存在，就跳转到锚点
            if(anchorElement) {
                //带滑动效果
                anchorElement.scrollIntoView({block: 'start', behavior: 'smooth'});
            }
        }
    }
}

export default CityList
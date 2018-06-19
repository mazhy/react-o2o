import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from '../../components/Star'
import './style.less'

class DetailInfo extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    }
    render() {
        // 获取数据
        const data = this.props.data
        return (
            <div id="detail-info-container">
                <div>
                    <div className="detail-info-top-img">
                        {
                            this.props.data.store
                            ?<div className="store" onClick={this.handleClickStore.bind(this)}></div>
                            :<div className="unStore" onClick={this.handleClickStore.bind(this)}></div>
                        }
                        <img src={data.img} alt="" width={'100%'}/>
                    </div>
                    <div className="info-name" >
                        <p className="info-poi-brand">{data.title}</p>
                        <div className="info-poi-score">
                            <span className="score">
                                <span className="stars" >
                                    <Star star={data.star}/>
                                </span>
                            </span>
                            <span className="avg-price" >
                                人均：¥{data.price}
                            </span>
                        </div>
                    </div>
                    <div className="address">
                        <div className="poi-address">{data.address}</div>
                    </div>
                </div>
            </div>
        )
    }

    handleClickStore(){
        this.props.handleClickStore()
    }
}

export default DetailInfo
import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getListData } from '../../../fetch/home/home'
import './style.less'
import ListComponent from '../../../components/List'
import LoadMore from "../../../components/LoadMore";

class List extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : [],
            loadMore : false,
            isLoadingMore : false,
            page: 1,
        }
    }
    render() {
        return (
            <div>
                <div className="home-list-title">猜你喜欢</div>
                <ListComponent data={this.state.data}/>
                <LoadMore handlerLoadMore={this.handlerLoadMore.bind(this)} isLoadingMore={this.state.isLoadingMore}/>
            </div>
        )
    }

    componentDidMount() {
        this.handlerFirstLoad()
    }

    handlerLoadMore() {
        this.setState({
            isLoadingMore: true,
            page: this.state.page +1,
        })

        let {cityName} = this.props
        let result = getListData(cityName,this.state.page);
        this.handlerLoad(result)
    }

    handlerFirstLoad(){
        let {cityName} = this.props
        let result = getListData(cityName,0);
        this.handlerLoad(result)
    }

    handlerLoad(result){
        result.then(res => {
            let data  = res.json();
            return data;
        }).then(json => {
            let data = json.data;
            let loadMore = json.loadMore;
            this.setState({
                data:this.state.data.concat(data),
                loadMore,
                isLoadingMore: false,
            })
        })
    }

}

export default List
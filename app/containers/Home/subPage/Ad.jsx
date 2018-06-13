import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getAdData } from '../../../fetch/home/home'
import HomeAd from '../../../components/HomeAd'

class Ad extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            data : [],
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.data.length
                        ?<HomeAd data={this.state.data}/>
                        : <div>loading</div>
                }
            </div>
        )
    }


    componentDidMount() {
        const result = getAdData();
        result.then(res =>{
            return res.json()
        }).then(json => {
            const data = json
            if(data.length) {
                //随机取三个
                let returnData = []
                let indexArr= []
                while(returnData.length < 3 ){
                    var index = Math.floor((Math.random() * data.length));
                    if(indexArr.indexOf(index) < 0){
                        returnData.push(data[index])
                        indexArr.push(index)
                    }else{
                        continue
                    }
                }
                this.setState({data:returnData})
            }
        })

    }
}

export default Ad
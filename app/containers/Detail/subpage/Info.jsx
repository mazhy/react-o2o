import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detai'
import DetailInfo from '../../../components/DetailInfo'

class Info extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            status : false,
            info:{}
        }
    }

    componentWillMount(){
        let id = this.props.id
        let result = getInfoData(id)
        result.then(res => {
            let data  = res.json()
            return data
        }).then(json => {
            let info = json
            this.setState({
                info,
                status:true
            })
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.status
                        ? <DetailInfo data={this.state.info}/>
                        : ''
                }
            </div>
        )
    }
}

export default Info
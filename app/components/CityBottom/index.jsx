import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class CityBottom extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        return (
            <div>
                <footer className="footer">
                    <br/>
                    <p className="copyright">仿大众点评-React实现-请下载正版APP</p>
                    <br/>
                </footer>
            </div>
        )
    }
}

export default CityBottom
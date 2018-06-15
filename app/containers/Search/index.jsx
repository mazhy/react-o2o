import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader'
import SearchList from './subpage/List'



class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        let param = this.props.params
        console.log(param.type)
        return (
            <div>
                <SearchHeader keyword={param.keyword}/>
                <SearchList keyword={param.keyword} category={param.type}/>
            </div>
        )
    }
}
// 使用 require.ensure 异步加载，还不支持 ES6 的 export
export default Search
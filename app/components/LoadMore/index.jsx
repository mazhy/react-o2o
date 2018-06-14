import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

class LoadMore extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                    ? <span><img src="/loading/loading.gif" alt="" width="15px" height="15px" style={{marginRight:10}}/>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
                }
            </div>
        )
    }
    loadMoreHandle() {
        // 执行传输过来的
        this.props.handlerLoadMore();
    }

    componentDidMount() {

        let timeoutId   //用于清除setTimeOut,实现节流效果
        const wrapper = this.refs.wrapper;  //正在加载所在的dom元素
        let loadMoreHandle = this.props.handlerLoadMore     //加载更多函数
        function callback () {
            const windowHeight = window.screen.height
            const top = wrapper.getBoundingClientRect().top
            if(top && top < windowHeight){
                 loadMoreHandle()
            }
        }

        window.addEventListener('scroll',function(){
            //如果是正在加载的状态直接返回
            if(this.props.isLoadingMore){
                return
            }
            if(timeoutId){
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(callback,50)
        }.bind(this),false)

    }
}

export default LoadMore
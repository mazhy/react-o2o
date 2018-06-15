import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router'
import './style.less'
import {getCategory} from '../../fetch/category/category'


class Category extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index : 0,
            categoryList: {}
        }
    }

    componentWillMount() {
        let result = getCategory()
        result.then(res => {
            let data = res.json()
            return data
        }).then(json =>{
            let categoryList= json.data
            this.setState({
                categoryList
            })
        })
    }

    render() {
        let opt = {
            auto: 2000,
            callback: function(index) {
                this.setState({index})
            }.bind(this)
        }
        // 这个做法很恶心,但是无可奈何,个人能力有限,就先这样吧
        let {listA,listB,listC} = this.state.categoryList
        return (
            <div id="home-category">
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            {listA && listA.map((ele,index)=>{
                                return(
                                    <Link to={ele.link} key={index}>
                                        <li className="float-left ">
                                            <img src={ele.src} alt="" width="44px"/>
                                            <p>{ele.title}</p>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            {listB && listB.map((ele,index)=>{
                                return(
                                    <Link to={ele.link} key={index}>
                                        <li className="float-left ">
                                            <img src={ele.src} alt="" width="44px"/>
                                            <p>{ele.title}</p>
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="carousel-item">
                        <ul className="clear-fix">
                            {listC && listC.map((ele,index)=>{
                                return(
                                    <Link to={ele.link} key={index}>
                                        <li className="float-left ">
                                            <img src={ele.src} alt="" width="44px"/>
                                            <p>{ele.title}</p>
                                        </li>
                                    </Link>
                                )
                            })}
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
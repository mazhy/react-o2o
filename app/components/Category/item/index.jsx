import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {Link} from 'react-router'

class CategoryItem extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            index : 0,
        }
    }
    render() {
        const {item} = this.props
        console.log(item)
        return (
            <Link to={item.search}>
                <li className="float-left">
                    <img src={item.srcVal} alt="" width="44px"/>
                    <p>{item.title}</p>
                </li>
            </Link>
        )
    }
}

export default CategoryItem
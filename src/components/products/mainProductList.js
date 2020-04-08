import React from 'react';
import './../../assets/css/main/products.css';
import MainProductListItem from './mainProductItem';
import { connect } from 'react-redux';
import { getAllProducts } from '../../api/data/products';
class MainProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        this.setState(Object.assign({},this.state,{items:getAllProducts()}));
    }
    compon
    render() {
        return (
            <ul className="product-list">
                {
                   this.state.items.map((item) => {
                       return (
                            <li className="product-list-item">
                           <MainProductListItem item={item} />
                           </li>
                           );
                       }) 
                }

            </ul>
        );
    }

}
function mapStateToProps(state, ownProps) {

}
export default MainProductList;

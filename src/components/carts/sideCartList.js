import React from 'react';
import '../../assets/css/main/cart.css';
import { connect } from 'react-redux';
import SideCartListItem from './sideCartListItem';
import { getProductById } from '../../api/data/products';
const currency = "550";//1 euro === 550 Kwanzas
function SideCartList({ cart, dispatch }) {
    return (
      
                <ul className="side-cart-list">
                 {
                   cart.map((item) => {
                    let _item = getProductById(item.id)
                       return (
                            <li className="side-card-list-item">
                            
                           <SideCartListItem title={_item.title ? _item.title : ''} image={_item.filename ? _item.filename : 'empty-product-large.png'} quant={item.quant} id={item.id} />
                            </li>
                           );
                       }) 
                }
                </ul>
    );
}
function mapStateToProps(state) {
return {
    cart: state.cart
}
}  
function mapDispatchToProps(props) {

}
export default connect(mapStateToProps)(SideCartList);

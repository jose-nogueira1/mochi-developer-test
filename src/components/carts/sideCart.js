import React from 'react';
import '../../assets/css/main/cart.css';
import { connect } from 'react-redux';
import SideCartList from './sideCartList';
import { getProductById } from '../../api/data/products';
import {CART_ACTIONS, clearList} from '../../redux/actions';

const currency = "550";//1 euro === 550 Kwanzas

 
function SideCart({total,quant,dispatch,cartView,closeCart}) {
    return (
        <div className={!cartView ? "side-cart-holder" : "side-cart-holder side-cart-holder-active" }>
            <div className={quant>0 ? "invisible" : "empty-cart-text-holder"}>
                <h2 className="no-items-text">O seu carrinho está vázio</h2>
                <p className="how-to-add-text">Clique em um produto para adicionar<br /> ao carrinho de compras.
                </p>
            </div>
            <div className={quant <= 0 ? "invisible" : "non-empty-cart-holder"}>
            <h4>Total: {total ? total : '0.00'} Kz</h4>
            <button onClick={()=>dispatch(clearList())} type="button" className="empty-basket-btn">Limpar carrinho</button>
            <SideCartList/>
            <button onClick={()=>closeCart()} type="button" className="empty-basket-btn red-btn mb-3">Fechar</button>
            </div>
        </div>
    );
}  
function getTotal(items){
    let total = 0;
    items.forEach(element => {
       let _item =  getProductById(element.id)
        total = +total + +_item.price
    });
    return (total*currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}
function mapStateToProps(state) {
return {
    quant : state.cart.length,
    total : getTotal(state.cart)
}
}
function mapDispatchToProps(props) {

}
export default connect(mapStateToProps)(SideCart);

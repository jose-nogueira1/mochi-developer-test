import React from 'react';
import '../../assets/css/main/products.css';
import {connect} from 'react-redux';
import {CART_ACTIONS, addQuantProduct} from '../../redux/actions';
const currency = "550";//1 euro === 550 Kwanzas
function MainProductListItem({item,dispatch}) {
  return (
    <div className="product-list-item-card">
                <div class="product-list-item-card-image-holder">
                  <img className="product-list-item-card-image" src={require("../../assets/images/products/"+(item.filename))} alt="Product Card Image" />
                </div>
                <div onClick={()=> dispatch(addQuantProduct(item.id,1))} className="click-to-view-holder">
                  <p className="click-to-view-holder-text">Clique para adicionar ao carrinho!</p>
                </div>
                <div className="product-list-item-card-sub-info">
                  <h4 className="product-list-item-card-sub-info-header">{item.title.toString().length > 15 ? item.title.toString().slice(0,16) + "..." : item.title}</h4>
                  <h6 className="product-list-item-card-sub-info-header">{item.price ? (item.price * currency).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')  : 0 } Kz</h6>
                </div>
    </div>
  );
}
function mapStateToProps(state){

}
function mapDispatchToProps(props){

}
export default connect()(MainProductListItem);

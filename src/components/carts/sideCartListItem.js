import React from 'react';
import '../../assets/css/main/cart.css';
import { connect } from 'react-redux';
import { getProductById } from '../../api/data/products';
import {CART_ACTIONS, addQuantProduct,minusQuantProduct, removeProduct} from '../../redux/actions';

const currency = "550";//1 euro === 550 Kwanzas
class SideCartListItem extends React.Component{
    constructor(props){
        super(props);
        console.log("Item from List ::: ",this.props.item);
        this.state = {
            item:{},
           
        }
    }
    componentDidMount() {
      
    }
 

  render(){
    return (
        <div className="side-cart-list-item-card">
        <img src={require("../../assets/images/products/"+(this.props.image ? this.props.image : 'empty-product-large.png'))} className="side-cart-list-item-card-image" alt="Product image" />
        <div className="side-cart-list-item-card-info">
             <p className="side-cart-list-item-card-info-title">{this.props.title ?(this.props.title.toString().length > 15 ? this.props.title.toString().slice(0,16) + "..." : this.props.title) : ""} - ( {this.props.quant ? this.props.quant : '0'} )</p> 
            <div className="side-cart-list-item-card-info-manager">
                <button onClick={()=> this.props.dispatch(addQuantProduct(this.props.id,1))} className="side-cart-list-item-card-info-manager-btn blue-btn" title="Adicionar" type="button">+1</button>
                <button onClick={()=> this.props.dispatch(minusQuantProduct(this.props.id,1))} className="side-cart-list-item-card-info-manager-btn blue-btn" title="Diminuir" type="button">-1</button>
                <button onClick={()=> this.props.dispatch(removeProduct(this.props.id))} className="side-cart-list-item-card-info-manager-btn red-btn" title="Remover da lista" type="button">x</button></div>
        </div>
    </div>
    );   
  }  
  
}
function mapStateToProps(state) {

}  
function mapDispatchToProps(props) {

}
export default connect()(SideCartListItem);
    
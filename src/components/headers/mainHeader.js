import React from 'react';
import mainLogo from '../../assets/images/main-logo.png';
import cartIcon from '../../assets/images/cart-icon.png';
import '../../assets/css/headers/nav.css';
import {connect} from  'react-redux';
function MainHeader({totalInCart,openCart}) {
  return (
    <header>
    <nav className="nav-holder">
      <a href="#"><img height={40} width={40} src={mainLogo} alt="Website's Logo" title="Website's Logo" /></a>
      <ul className="nav-list">
        <li title="Navigation List Item" className="nav-list-item nav-list-item-active">Loja</li>
        <li title="Navigation List Item" onClick={()=> openCart()} className="nav-list-item">Carrinho</li>
      </ul>
      <div onClick={()=>openCart()} className="cart" title="Cart and Store Manager">
        <img height={30} width={30} src={cartIcon} alt="Cart Image" title="Cart Image" className="cart-quant-img" />
        <span title="Quant of items in cart" className="cart-quant-text">{totalInCart ? totalInCart : 0}</span>
      </div>
    </nav>
  </header>
  );
}
function mapStateToProps(state){
  return {
    totalInCart: state.cart.length
  }
}
export default connect(mapStateToProps)(MainHeader);

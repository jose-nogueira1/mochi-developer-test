import React from 'react';
import logo from './logo.svg';
import mainLogo from './assets/images/main-logo.png';
import cartIcon from './assets/images/cart-icon.png';
import './App.css';
import './assets/css/headers/nav.css';
import './assets/css/main/products.css';
import MainHeader from './components/headers/mainHeader';
import MainProductList from './components/products/mainProductList';
import store from './redux/store';
import { Provider } from 'react-redux';
import SideCart from './components/carts/sideCart';
var cartViewState = false;


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cartViewState : false
    }
  }
   openCart() {
    this.setState(Object.assign({},this.state,{cartViewState:true}));

  }
  closeCart() {
    this.setState(Object.assign({},this.state,{cartViewState:false}));
  
  }
  
  render(){

 
  return (
    <Provider store={store}>
      <div className="App">
        <div class="container">
          <section className="top-section">
            <MainHeader openCart={() => this.openCart()} />
          </section>
          <section className="main-section">
            <MainProductList />
          </section></div>
      </div>
      <SideCart cartView={this.state.cartViewState} closeCart={() => this.closeCart()} />
    </Provider>  
  );
  }
}

export default App;

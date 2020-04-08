import { CART_ACTIONS } from './actions';
var initialState = {
    cart: []
};
//Handles In Depth Concepts of State
export function cartReducer(state, action) {
    if (typeof state === 'undefined') {
        return [];
    }
    let _cart = null;
    let found = null;
    let newItem = null;
    switch (action.type) {
        case CART_ACTIONS.ADD_PRODUCT:
            _cart = [...state];//Copys 
            console.log("Debugging quant of items ::: ", _cart);
            found = false;
            newItem = {};
            _cart = _cart.map((item) => {
                //Checks if 
                if (item.id == action.id) {
                    //Sum quant
                    item.quant = +item.quant + +action.quant
                    found = true;
                }
                return item;
            })

            //Item not found add to list and set quant
            if (!found) {
                newItem = {
                    id: action.id,
                    quant: action.quant
                };
                _cart = [newItem, ..._cart];//Sets new Item to Cart
            }

            return _cart;
        case CART_ACTIONS.SUBTRACT_PRODUCT:
            _cart = [...state];//Copys State
            found = false;
            newItem = {};
            _cart = _cart.map((item) => {
                //Checks if 
                if (item.id == action.id) {
                    //Sum quant
                    item.quant = +item.quant - +action.quant
                    found = true;
                }
                return item;
            })
            _cart = _cart.filter((item) => item.quant > 0);//Gets all items that have quant that are higher than 0.
            return _cart;
        case CART_ACTIONS.REMOVE_PRODUCT:
            _cart = [...state];
            _cart = _cart.filter((item) => item.id !== action.id);//Gets all items that have quant 
            return _cart;
        case CART_ACTIONS.CLEAR_LIST:
            return [];//Returns and empty storage memory space --- empty list
        default:
            return state;
    }

}
//Handles Global Concept of State, Reducer composition was set ::: 
export function primaryReducer(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    return {
        cart: cartReducer(state.cart, action)
    };
}


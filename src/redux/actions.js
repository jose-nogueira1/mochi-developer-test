//Actions that happens in a Cart Service
/*
*Add Product
*Remove Product
*Adds quant in product
*Subtracts quant in Product
*Other information like subTotal, total, and discounts can be handles with mapStateToProps with
*specified props to handle correct result
*/

//Action Creators
/*
{
    type:"Name",
    [..Custom Values]
}
*/
//Types of Action
export const CART_ACTIONS = {
    ADD_PRODUCT:0,
    SUBTRACT_PRODUCT:1,
    REMOVE_PRODUCT:2,
    CLEAR_LIST:3
};
//Updates the respective quant of the item :::: 
export function addQuantProduct(id,quant){
    return {
        type:CART_ACTIONS.ADD_PRODUCT,
        id: id,
        quant: typeof quant === "number" ? quant : 1
    }
}
//Updates the respective quant of the item :::: 
export function minusQuantProduct(id,quant){
    return {
        type:CART_ACTIONS.SUBTRACT_PRODUCT,
        id: id,
        quant: typeof quant === "number" ? quant : 1
    }
}
//Removes Item from List
export function removeProduct(id){
    return {
        type:CART_ACTIONS.REMOVE_PRODUCT,
        id: id,
       
    }
}
//Removes all item in the cart list
export function clearList(){
    return {
        type:CART_ACTIONS.CLEAR_LIST,
    }
}


const initialData = {
    cartcount: 0
}

const cartReducer = (state = initialData, action) => {
    // state stores the initial value
    // action is a function which performs oprerations like add, remove, edit, delete

    // return state;
    switch (action.type) {
        case 'ADD_TO_CART':
            return{
                cartcount:++state.cartcount
                // add 1 to previous state count
            };
        case 'REMOVE_FROM_CART':
            return{
                cartcount:--state.cartcount
                // substract 1 to previous state count
            };
        default:
            return state;
    }
}

export default cartReducer;
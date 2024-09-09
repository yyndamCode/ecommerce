import  {createSlice} from "@reduxjs/toolkit";
const storeInLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};
const initialState = {
    cart: [],

}
const cardSlice =createSlice({
    name: "cart",
    initialState: initialState,
    reducers:{
        addCart: (state, action) => {
            state.cart.push(action.payload);
            // console.log(`Dec: ${JSON.stringify(state.cart)}, `);
        },
        deleteCart: (state, action) => {
            const newItem = state.cart.filter(
                (item) => item.id !== action.payload
            );
            state.cart = newItem;
            storeInLocalStorage(state.cart);
        },
        increaseItemQuantity(state, action) {
            const item = state.cart.find((item) => item.id == action.payload);
            item.quantity++;
            // console.log(`Dec: ${JSON.stringify(item)}, ============`);
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const { payload } = action;
            const updatedCart = state.cart.map((item) => {
                if (item.burgerId === payload && item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1,
                        totalPrice: (item.quantity - 1) * item.unitPrice,
                    };
                }
                return item;
            });
            return {
                ...state,
                cart: updatedCart,
            };
        },
        clearCart(state) {
            state.itemList = [];
            state.totalItems = 0;
        },
    }
})

export const {addCart, deleteCart,increaseItemQuantity,decreaseItemQuantity,clearCart} = cardSlice.actions;

export const getCurrentQuantityById = (id) => (state) =>
    state.cart.cart.find((item) => item.id === id)?.quantity ?? 0;

export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getCartTotalPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);
};

export const getCart = (state) => {
    return state.cart.cart;
};
export default cardSlice.reducer;

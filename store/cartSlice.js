import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   cartItems: [],
   totalPrice: 0,
};

const calcTotalPrice = (state) => {
   state.totalPrice = state.cartItems.reduce(
      (total, item) => total + parseInt(item.price) * item.quantity,
      0
   );
};

const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      setProductToCart: (state, action) => {
         let cartIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id,
         )
         if (cartIndex >= 0) {
            state.cartItems[cartIndex].quantity += 1
         } else {
            let tempProduct = { ...action.payload, quantity: 1 }
            state.cartItems.push(tempProduct)
         }
         calcTotalPrice(state);
      },
      incrementProduct: (state, action) => {
         const newState = state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  quantity: item.quantity + 1,
               };
            }
            return item;
         });
         state.cartItems = newState;
         calcTotalPrice(state);
      },
      decrementProduct: (state, action) => {
         const newState = state.cartItems.map((item) => {
            if (item.id === action.payload.id) {
               return {
                  ...item,
                  quantity: item.quantity - 1,
               };
            }
            return item;
         });
         state.cartItems = newState.filter((el) => el.quantity > 0);
         calcTotalPrice(state);
      },
   },
});

export const { setProductToCart, incrementProduct, decrementProduct } =
   cartSlice.actions;
export default cartSlice.reducer;

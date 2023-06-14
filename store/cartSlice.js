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
         const newItem = action.payload;
         const existingItem = state.cartItems.find(
            (item) => item.id === newItem.id
         );
         if (!existingItem) {
            const updatedCartItems = [...state.cartItems, newItem];
            newItem.quantity = 1;
            state.cartItems = updatedCartItems;
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

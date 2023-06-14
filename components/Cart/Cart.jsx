"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Cart.module.scss";
import Button from "@/components/Button/Button";
import Counter from "@/components/Counter/Counter";

import { incrementProduct, decrementProduct } from "@/store/cartSlice";

const Cart = () => {
   const dispatch = useDispatch();
   const handleCounter = (value, type, item) => {
      if (type === "increment") {
         dispatch(incrementProduct(item));
      } else if (type === "decrement") {
         dispatch(decrementProduct(item));
      }
   };
   const totalPrice = useSelector((state) => state.cart.totalPrice);
   const cartItems = useSelector((state) => state.cart.cartItems);

   return (
      <div className={styles.cartContainer}>
         <div className={styles.cartProductContainer}>
            {!!(cartItems || [])?.length ? (
               cartItems.map((item, index) => {
                  return (
                     <div className={styles.cartProduct} key={index}>
                        <span className={styles.productInfo}>
                           <span>{item.name}</span>
                           <span className={styles.productPrice}>
                              {item.price} ₺
                           </span>
                        </span>
                        <Counter
                           initialCount={item.quantity}
                           maxCount={20}
                           handleCounter={(value, type) =>
                              handleCounter(value, type, item)
                           }
                        />
                     </div>
                  );
               })
            ) : (
               <span>There are no products in the basket</span>
            )}
         </div>
         <div className={styles.checkout}>
            <div>
               Total Price:{" "}
               <span className={styles.totalPrice}>{totalPrice} ₺</span>
            </div>
            <Button text="Checkout" width="100%" />
         </div>
      </div>
   );
};

export default Cart;

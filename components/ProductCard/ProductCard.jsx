"use client"

import React  from "react";
import styles from "./ProductCard.module.scss";
import Button from "@/components/Button/Button";
import { useSelector } from "react-redux";

const ProductCard = ({ image, price, name, id, addToCart, clickCard }) => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   const quantity = (cartItems || [])?.find((el) => el.id === id)?.quantity || 0;

   const handleButton = (event) => {
      event.stopPropagation();
      addToCart()
   }

   return (
      <div className={styles.card} onClick={clickCard}>
            <img
               className={styles.card__image}
               src={image}
               alt="product-image"
               height="150"
            />
            <span className={styles.card__price}>{`${price || 400} ₺`}</span>
            <span className={styles.card__title}>{name || "Title"}</span>
         <span>
            <Button
               text={+quantity > 0 ? `${quantity} items in cart` : "Add to card"}
               type={+quantity > 0 ? "success" : "primary"}
               width="100%"
               onClick={handleButton}
            />
         </span>
      </div>
   );
};

export default ProductCard;

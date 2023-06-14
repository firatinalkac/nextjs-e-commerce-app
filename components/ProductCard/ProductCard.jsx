import React from "react";
import styles from "./ProductCard.module.scss";
import Button from "@/components/Button/Button";
import { useSelector } from "react-redux";

const ProductCard = ({ image, price, name, id, addToCart }) => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   const quantity =
      (cartItems || [])?.find((el) => el.id === id)?.quantity || 0;
   return (
      <div className={styles.card}>
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
               text={parseInt(quantity) > 0 ? "Added to cart" : "Add to card"}
               type={parseInt(quantity) > 0 ? "success" : "primary"}
               width="100%"
               onClick={() => addToCart()}
            />
         </span>
      </div>
   );
};

export default ProductCard;

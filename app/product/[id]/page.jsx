"use client";
import React, { useEffect, useState, useMemo } from "react";
import productServices from "@/services/productServices";
import styles from "@s/modules/productDetail.module.scss";
import Button from "@/components/Button/Button";
import { setProductToCart } from "@/store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = ({ params }) => {
   const cartItems = useSelector((state) => state.cart.cartItems);
   const [productData, setProductData] = useState(null);
   const dispatch = useDispatch();

   useEffect(() => {
      productServices.getProductById(params.id).then(setProductData);

      return () => {
         setProductData(null);
      };
   }, [params.id]);

   const quantity = useMemo(() => {
      return cartItems?.find((item) => item.id === params.id)?.quantity || 0;
   }, [cartItems]);

   const addToCart = (item) => {
      if (quantity === 0) {
         dispatch(setProductToCart(item));
      }
   };

   return (
      <div className={styles.detailContainer}>
         <div className={styles.imageContainer}>
            <img src={productData?.image} alt={productData?.id} />
         </div>
         <div className={styles.productInfo}>
            <h3 className={styles.title}>{productData?.name}</h3>
            <p className={styles.price}>{productData?.price} ₺</p>
            <Button
               text={!!quantity ? "In the cart" : "Add to Cart"}
               type={!!quantity ? "success" : "primary"}
               width="100%"
               onClick={() => addToCart(productData)}
               key={productData?.quantity}
            />
            <p className={styles.description}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
               animi aperiam architecto distinctio eaque explicabo fugiat,
               inventore laborum laudantium magni minus neque obcaecati officia
               quasi ratione tenetur voluptates! Amet ex laboriosam officia
               perspiciatis porro quisquam soluta ut voluptatem? Alias amet
               aperiam consequatur cum delectus dignissimos ducimus earum enim
               esse exercitationem fugit inventore magni maxime minus non nulla
               porro qui quos sed tenetur ut vel velit veniam, veritatis
               voluptates. Adipisci blanditiis explicabo nihil omnis quo
               repellat. Ad aspernatur atque commodi cum doloremque impedit
            </p>
         </div>
      </div>
   );
};

export default ProductDetail;

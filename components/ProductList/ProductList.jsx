"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductList.module.scss";

import { setProductToCart } from "@/store/cartSlice";
import productServices from "@/services/productServices";

import ProductCard from "@/components/ProductCard/ProductCard";
import {useRouter} from "next/navigation";

const ProductList = async ({ initialData }) => {
   const router = useRouter();
   const dispatch = useDispatch();

   const filters = useSelector((state) => state.products.filters);

   const [productList, setProductList] = useState(initialData);

   useEffect(() => {
      productServices.getProducts(filters).then(setProductList);

      return () => {
         setProductList([]);
      };
   }, [filters]);

   return (
      <div className={styles.products}>
         {productList?.map((product, index) => (
            <ProductCard
               key={index + "-" + product.id}
               image={product.image}
               price={product.price}
               name={product.name}
               id={product.id}
               productQuantity={product.quantity}
               addToCart={() => dispatch(setProductToCart(product))}
               clickCard={() => router.push(`/product/${product.id}`)}
            />
         ))}
      </div>
   );
};

export default ProductList;

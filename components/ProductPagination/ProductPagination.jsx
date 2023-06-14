"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ProductPagination.module.scss";

import { setFilters } from "@/store/filterSlice";
import productServices from "@/services/productServices";

import Pagination from "@/components/Pagination/Pagination";

const ProductPagination = async ({}) => {
   const dispatch = useDispatch();
   const filters = useSelector((state) => state.products.filters);

   const [total, setTotal] = useState(0);

   useEffect(() => {
      const { brand, model } = filters;
      productServices.getPaginationCount({ brand, model }).then((total) => {
         setTotal(total);
      });

      return () => {
         setTotal(0);
      };
   }, [filters]);

   return (
      <div className={styles.paginationContainer}>
         {total > 0 && (
            <Pagination
               page={+filters.page}
               perPage={+filters.limit}
               totalCount={total}
               onChange={(page) => dispatch(setFilters({ page }))}
            />
         )}
      </div>
   );
};

export default ProductPagination;

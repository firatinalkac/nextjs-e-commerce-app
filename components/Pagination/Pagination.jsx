"use client";
import React, { useMemo } from "react";
import styles from "./Pagination.module.scss";
import iconsData from "@/utils/icons-data";
import Image from "next/image";
import { calcArrayNumber } from "@/utils/helpers";

const Pagination = ({ page, totalCount, perPage, onChange }) => {
   const { paginationArr, totalPages } = useMemo(() => {
      const totalPages = Math.ceil(totalCount / perPage);
      let pagination = [];
      if (totalPages > 8) {
         if (page <= 3) {
            pagination = [
               ...calcArrayNumber(1, 4),
               "...",
               ...calcArrayNumber(totalPages - 2, totalPages),
            ];
         } else if (page > 3 && page < totalPages - 2) {
            pagination = [
               ...calcArrayNumber(1, 3),
               "...",
               page,
               "...",
               ...calcArrayNumber(totalPages - 2, totalPages),
            ];
         } else if (page >= totalPages - 2) {
            pagination = [
               ...calcArrayNumber(1, 3),
               "...",
               ...calcArrayNumber(totalPages - 3, totalPages),
            ];
         }
      } else {
         pagination = [...calcArrayNumber(1, totalPages)];
      }
      return { paginationArr: pagination, totalPages };
   }, [page, totalCount]);

   const handleChange = (direction) => {
      let currentPage = page;
      if (direction === "next" && currentPage !== totalPages) {
         currentPage++;
      } else if (direction === "previous" && currentPage !== 1) {
         currentPage--;
      } else if (typeof direction === "number") {
         currentPage = direction;
      } else {
         return;
      }
      onChange(currentPage);
   };

   return (
      <>
         <div className={styles.pagination}>
            <span
               className={`${styles.previous} ${
                  page === 1 ? styles.disabled : ""
               }`}
               onClick={() => handleChange("previous")}>
               <Image
                  src={iconsData.leftBlackIcon}
                  alt="left-black"
                  width={12}
                  height={12}
               />
            </span>
            <div className={styles.paginateContainer}>
               {paginationArr.map((pageNumber, index) => {
                  return (
                     <span
                        className={`${styles.page} ${
                           pageNumber === page ? styles.selected : ""
                        }`}
                        onClick={() =>
                           pageNumber !== "..." &&
                           handleChange(parseInt(pageNumber))
                        }
                        key={index}>
                        {pageNumber}
                     </span>
                  );
               })}
            </div>
            <span
               className={`${styles.next} ${
                  page === totalPages ? styles.disabled : ""
               }`}
               onClick={() => handleChange("next")}>
               <Image
                  src={iconsData.leftBlackIcon}
                  alt="left-black"
                  width={12}
                  height={12}
               />
            </span>
         </div>
      </>
   );
};

export default Pagination;

import React, { useState } from "react";
import styles from "./SearchList.module.scss";
import iconsData from "@/utils/icons-data";
import Input from "@/components/Input/Input";
import productServices from "@/services/productServices";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchList = ({ ...props }) => {
   const [searchValue, setSearchValue] = useState("");
   const [searchData, setSearchData] = useState([]);
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   const handleSearch = async (value) => {
      setSearchValue(value);
      if (value.length > 1) {
         setLoading(true);
         const response = await productServices.searchProduct(value);
         setSearchData(response);
         setLoading(false);
      } else {
         setSearchData([]);
      }
   };

   const handleItem = async (item) => {
      router.push(`/product/${item.id}`);
      setSearchValue("");
   };

   return (
      <>
         <Input
            handleInput={handleSearch}
            width={props.mobile ? "100%" : "320px"}
            placeholder="Search"
            leftIcon={iconsData.searchIcon}
            value={searchValue}
            paddingLeft="36px"
            iconLeftPosition="12px"
         />
         <div
            className={`${styles.searchList} ${
               searchValue.length > 1 ? styles.open : ""
            } ${props.mobile ? styles.mobile : ""}`}>
            {searchData.length === 0 && !loading ? (
               <span className={styles.noMatch}>
                  <Image
                     src={iconsData.noDataIcon}
                     height={48}
                     width={48}
                     alt="no-data"
                  />
                  <span>No Match Data</span>
               </span>
            ) : (
               searchData.map((item) => {
                  return (
                     <div
                        className={styles.searchItem}
                        key={item.id}
                        onClick={() => handleItem(item)}>
                        <span className={styles.searchItem__image}>
                           <Image
                              src={item.image}
                              width={40}
                              height={40}
                              alt={`image-${item.id}`}
                           />
                        </span>
                        <span className={styles.searchItem__desc}>
                           <span>{item.brand}</span>
                           <span>{item.model}</span>
                        </span>
                        <span className={styles.searchItem__price}>
                           {item.price} ₺
                        </span>
                     </div>
                  );
               })
            )}
         </div>
      </>
   );
};

export default SearchList;

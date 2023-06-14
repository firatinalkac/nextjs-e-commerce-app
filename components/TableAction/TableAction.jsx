"use client";

import React from "react";
import styles from "./TableAction.module.scss";
import Input from "@/components/Input/Input";
import IconsData from "@/utils/icons-data";
import RadioGroup from "@/components/Input/RadioGroup";
import useSearch from "@/hooks/useSearch";

const TableAction = ({ sources, initialSelected, handleFilter, title }) => {
   const handleRadioChange = (value) => {
      initialSelected = value;
      handleFilter(value);
   };

   const { searchResults, handleSearch } = useSearch(sources, "label");

   return (
      <div className={styles.filterBox}>
         <span className={styles.title}>{title}</span>
         <div className={styles.items}>
            <span>
               <Input
                  leftIcon={IconsData.searchIcon}
                  placeholder="Search"
                  backgroundColor="#f5f5f5"
                  iconSize={14}
                  padding="6px"
                  handleInput={handleSearch}
                  paddingLeft="20px"
                  iconLeftPosition="6px"
               />
            </span>
            <div className={styles.values}>
               {sources?.length > 0 ? (
                  <RadioGroup
                     options={searchResults}
                     selectedValue={initialSelected}
                     onChange={handleRadioChange}
                  />
               ) : (
                  "Yükleniyor..."
               )}
            </div>
         </div>
      </div>
   );
};

export default TableAction;
